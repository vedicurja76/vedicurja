#!/usr/bin/env bash
#
# setup.sh — complete, guarded, idempotent push-to-origin helper
# for the AstroVastu Expert (vedicurjavastu-dome) static-export repo.
#
# What it does, in order:
#   1. Preflight: verify we are inside a git work tree on a real branch,
#      that an `origin` remote exists and is reachable, and that the
#      toolchain (git, node, npm) is present.
#   2. Secret guard: refuse to stage/commit files that look like
#      credentials (.env, *.pem, private keys, etc.).
#   3. Commit: if the working tree is dirty, stage tracked changes and
#      create one commit (skipped when clean — idempotent).
#   4. Sync-check: fetch origin and refuse a non-fast-forward push
#      (never force-pushes behind your back).
#   5. Push: push the current branch and set upstream tracking.
#   6. Verify: confirm local HEAD == origin/<branch> after push.
#
# Usage:
#   ./setup.sh                      # commit any changes + push to origin
#   ./setup.sh -m "my message"      # custom commit message
#   ./setup.sh --no-commit          # push existing commits only
#   ./setup.sh --dry-run            # show what would happen, change nothing
#
set -euo pipefail

# ── Pretty output (disabled when not a TTY) ───────────────────────────────
if [[ -t 1 ]]; then
  BOLD=$'\033[1m'; GREEN=$'\033[0;32m'; RED=$'\033[0;31m'
  YELLOW=$'\033[1;33m'; BLUE=$'\033[0;34m'; NC=$'\033[0m'
else
  BOLD=''; GREEN=''; RED=''; YELLOW=''; BLUE=''; NC=''
fi
step() { printf '%s\n' "${BLUE}▶${NC} ${BOLD}$1${NC}"; }
ok()   { printf '   %s✓%s %s\n' "$GREEN" "$NC" "$1"; }
warn() { printf '   %s!%s %s\n' "$YELLOW" "$NC" "$1"; }
die()  { printf '   %s✗ %s%s\n' "$RED" "$1" "$NC" >&2; exit 1; }

# ── Flags ─────────────────────────────────────────────────────────────────
COMMIT=1; DRY=0; COMMIT_MSG=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    -m|--message)   COMMIT_MSG="${2:-}"; [[ -n "$COMMIT_MSG" ]] || die "--message needs a value"; shift 2 ;;
    --no-commit)    COMMIT=0; shift ;;
    --dry-run)      DRY=1; shift ;;
    -h|--help)      sed -n '2,30p' "$0"; exit 0 ;;
    *)              die "Unknown option: $1 (see --help)" ;;
  esac
done

# ── 1. Preflight ──────────────────────────────────────────────────────────
step "Preflight checks"
command -v git  >/dev/null 2>&1 || die "git not found on PATH"
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || die "not inside a git work tree"
cd "$(git rev-parse --show-toplevel)"

BRANCH="$(git symbolic-ref --quiet --short HEAD || true)"
[[ -n "$BRANCH" ]] || die "detached HEAD — checkout a branch first"

# toolchain (warn only — not needed for the push itself)
command -v node >/dev/null 2>&1 && ok "node $(node -v)" || warn "node not found (fine for push, needed for build)"
command -v npm  >/dev/null 2>&1 || warn "npm not found (fine for push, needed for install/build)"

git remote get-url origin >/dev/null 2>&1 || die "no 'origin' remote configured"

# Print the remote URL with any embedded credentials masked.
REMOTE_DISPLAY="$(git remote get-url origin | sed -E 's#(https?://)[^/@]+@#\1***@#')"
ok "branch: $BRANCH"
ok "origin: $REMOTE_DISPLAY"
if [[ "$(git remote get-url origin)" =~ :[^/@]+@ ]]; then
  warn "remote URL contains an embedded credential — rotate it & use a credential helper/SSH:"
  warn "  https://github.com/settings/tokens"
fi

# ── Helper: does a path look like a secret? ───────────────────────────────
looks_secret() {
  grep -qiE '(^|/)\.env($|\.)|\.pem$|\.key$|id_rsa|credentials|secret|token\.(json|ya?ml)$|\.p12$|\.pfx$' <<<"$1"
}

# ── 2 + 3. Commit dirty tracked changes (guarded) ─────────────────────────
if [[ "$COMMIT" -eq 1 ]]; then
  step "Working tree"
  # Count tracked modifications (staged + unstaged), ignoring untracked/ignored.
  DIRTY="$(git status --porcelain --untracked-files=no | wc -l | tr -d ' ')"
  if [[ "$DIRTY" == "0" ]]; then
    ok "clean — nothing new to commit"
  else
    warn "$DIRTY tracked file(s) changed"
    # Stage tracked changes only (never untracked/ignored like out/).
    if [[ "$DRY" -eq 1 ]]; then
      git status --short --untracked-files=no
    else
      git add -u
    fi
    # Secret guard on what we are about to commit.
    STAGED="$(git diff --cached --name-only || true)"
    BAD=""
    while IFS= read -r f; do
      [[ -n "$f" ]] && looks_secret "$f" && BAD+="$f"$'\n'
    done <<<"$STAGED"
    if [[ -n "$BAD" ]]; then
      git reset -q -- $(printf '%s' "$BAD" | tr '\n' ' ') 2>/dev/null || true
      die "refusing to commit credential-like file(s):"$'\n'"$BAD"
    fi
    if [[ "$DRY" -eq 1 ]]; then
      ok "(dry-run) would commit: $(printf '%s' "$STAGED" | wc -l | tr -d ' ') file(s)"
    else
      [[ -n "$COMMIT_MSG" ]] || COMMIT_MSG="chore: sync $(git rev-parse --abbrev-ref HEAD) @ $(date -u +%Y-%m-%dT%H:%MZ)"
      git commit -q -m "$COMMIT_MSG"
      ok "committed: $COMMIT_MSG"
    fi
  fi
else
  step "Commit skipped (--no-commit)"
fi

# ── 4. Fetch + divergence check ────────────────────────────────────────────
step "Reconcile with origin"
if [[ "$DRY" -eq 1 ]]; then
  warn "dry-run: skipping 'git fetch origin'"
else
  git fetch --quiet origin "$BRANCH" 2>/dev/null || warn "could not fetch '$BRANCH' from origin (may be a new remote branch)"
fi

if git rev-parse --verify --quiet "origin/$BRANCH" >/dev/null; then
  read -r AHEAD BEHIND < <(git rev-list --left-right --count "origin/$BRANCH...HEAD")
  ok "local vs origin/$BRANCH → ahead $AHEAD, behind $BEHIND"
  if [[ "$BEHIND" -gt 0 ]]; then
    die "your branch is $BEHIND commit(s) BEHIND origin. Rebase/merge first — this script will NOT force-push."
  fi
  if [[ "$AHEAD" -eq 0 ]]; then
    ok "already in sync — nothing to push"
    [[ "$DRY" -eq 1 ]] || exit 0
  fi
else
  warn "origin/$BRANCH does not exist yet — will push a new branch with -u"
  AHEAD="?"
fi

echo
step "Commits that will be pushed"
git log --oneline "origin/${BRANCH}..HEAD" 2>/dev/null || git log --oneline -5

# ── 5. Push ────────────────────────────────────────────────────────────────
step "Push to origin/$BRANCH"
if [[ "$DRY" -eq 1 ]]; then
  warn "dry-run: would run → git push -u origin $BRANCH"
  exit 0
fi
git push -u --atomic origin "$BRANCH"
ok "pushed"

# ── 6. Verify ──────────────────────────────────────────────────────────────
step "Verify"
LOCAL_SHA="$(git rev-parse HEAD)"
REMOTE_SHA="$(git ls-remote origin "refs/heads/$BRANCH" | awk '{print $1}')"
if [[ "$LOCAL_SHA" == "$REMOTE_SHA" ]]; then
  ok "origin/$BRANCH == HEAD (${LOCAL_SHA:0:7}) — done ✅"
else
  warn "remote sha ($REMOTE_SHA) != local ($LOCAL_SHA) — check the push output above"
fi
