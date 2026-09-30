#!/usr/bin/env bash
# =============================================================================
#  setup.sh — vedicurj full-repo snapshotter (v5.0.0 · zero-fork design)
#  Output: vedicurj.txt  =  header + stats + full tree + manifest + ALL code
# =============================================================================
set -euo pipefail
shopt -s nullglob 2>/dev/null || true

VERSION="5.0.0"
OUTPUT="${OUTPUT:-vedicurj.txt}"
MAX_FILE_KB="${MAX_FILE_KB:-2048}"
REPO_ARG=""

if [[ -t 1 ]]; then
  B=$'\033[1m'; D=$'\033[2m'; G=$'\033[32m'; Y=$'\033[33m'
  R=$'\033[31m'; C=$'\033[36m'; N=$'\033[0m'
else
  B=""; D=""; G=""; Y=""; R=""; C=""; N=""
fi
log()  { printf '%s▸%s %s\n' "$C" "$N" "$*"; }
ok()   { printf '%s✓%s %s\n' "$G" "$N" "$*"; }
warn() { printf '%s⚠%s %s\n' "$Y" "$N" "$*" >&2; }
die()  { printf '%s✗%s %s\n' "$R" "$N" "$*" >&2; exit 1; }

while (( $# )); do
  case "$1" in
    -o|--output) OUTPUT="$2"; shift 2 ;;
    -h|--help) cat <<EOF
setup.sh v$VERSION — full-repo snapshot to vedicurj.txt
USAGE: ./setup.sh [-o output.txt] [repo-path]
ENV:   MAX_FILE_KB=2048
EOF
      exit 0 ;;
    -v|--version) echo "$VERSION"; exit 0 ;;
    --) shift; break ;;
    -*) die "Unknown option: $1" ;;
    *)  REPO_ARG="$1"; shift ;;
  esac
done

command -v git >/dev/null || die "git is required"
[[ -z "$REPO_ARG" ]] && REPO_ARG="."
[[ -d "$REPO_ARG" ]] || die "Not a directory: $REPO_ARG"
cd "$REPO_ARG"
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || die "Not a git repo"
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"
REPO_NAME="$(basename "$REPO_ROOT")"
REPO_REMOTE="$(git config --get remote.origin.url 2>/dev/null || echo '—')"

log "Repository : ${B}${REPO_NAME}${N}"
log "Root       : ${REPO_ROOT}"
log "Remote     : ${REPO_REMOTE}"

MAX_BYTES=$(( MAX_FILE_KB * 1024 ))

human_size() {
  awk -v b="$1" 'BEGIN{
    if (b<1024) printf "%d B",b;
    else if (b<1048576) printf "%.1f KB",b/1024;
    else if (b<1073741824) printf "%.2f MB",b/1048576;
    else printf "%.2f GB",b/1073741824;
  }'
}
commas() { printf '%s' "$1" | sed ':a;s/\B[0-9]\{3\}\>/,&/;ta'; }

progress() {
  local cur=$1 tot=$2
  (( tot==0 )) && return 0
  local w=32 pct=$(( cur*100/tot )) fill=$(( cur*w/tot ))
  local bar pad
  bar=$(printf '%*s' "$fill" '' | tr ' ' '█')
  pad=$(printf '%*s' $((w-fill)) '' | tr ' ' '░')
  printf '\r  %s[%s%s]%s %3d%%  %d/%d' "$D" "$bar" "$pad" "$N" "$pct" "$cur" "$tot"
}
end_progress() { printf '\r\033[K'; }

# ── 1. All tracked files ─────────────────────────────────────────────────────
log "Enumerating tracked files…"
mapfile -d '' -t ALL_FILES < <(git ls-files -z)
TOTAL=${#ALL_FILES[@]}
(( TOTAL > 0 )) || die "No tracked files found"
ok "Tracked files: ${B}${TOTAL}${N}"

# ── 2. Text file detection — ONE git call ────────────────────────────────────
#    git grep -I  → skip binary
#    git grep -l  → list filenames only
#    -e '^'       → matches every line (so every non-empty text file is listed)
log "Detecting text files (single git grep call)…"
declare -A IS_TEXT=()
while IFS= read -r line; do
  [[ -n "$line" ]] && IS_TEXT["$line"]=1
done < <(git grep --no-color -I -l -e '^' 2>/dev/null || true)

# Include empty tracked files as text too
while IFS= read -r -d '' f; do
  [[ -e "$f" && ! -s "$f" ]] && IS_TEXT["$f"]=1
done < <(git ls-files -z)

TEXT_PATHS=()
for f in "${ALL_FILES[@]}"; do
  [[ "${IS_TEXT[$f]:-0}" == 1 ]] && TEXT_PATHS+=("$f")
done
TEXT_N=${#TEXT_PATHS[@]}
(( TEXT_N > 0 )) || die "No text files found"
ok "Text files: ${B}${TEXT_N}${N} / ${TOTAL}"

# ── 3. Sizes — ONE git call ──────────────────────────────────────────────────
log "Getting sizes (git cat-file --batch-check)…"
declare -A F_SIZE=()
idx=0
while IFS=' ' read -r sha typ size; do
  [[ -z "${sha:-}" ]] && continue
  F_SIZE["${TEXT_PATHS[$idx]}"]="$size"
  ((idx++)) || true
done < <(printf '%s\n' "${TEXT_PATHS[@]}" | git cat-file --batch-check 2>/dev/null)

# ── 4. Language detection ────────────────────────────────────────────────────
declare -A LANG_MAP=(
  [js]=JavaScript [mjs]=JavaScript [cjs]=JavaScript
  [jsx]=JSX [ts]=TypeScript [tsx]=TypeScript
  [vue]=Vue [svelte]=Svelte [astro]=Astro
  [py]=Python [rb]=Ruby [php]=PHP [go]=Go [rs]=Rust
  [java]=Java [kt]=Kotlin [kts]=Kotlin [scala]=Scala
  [cs]=C# [fs]=F# [swift]=Swift [m]=Objective-C [mm]=Objective-C++
  [c]=C [h]=C-Header [cpp]=C++ [cc]=C++ [cxx]=C++ [hpp]=C++ [hh]=C++
  [dart]=Dart [lua]=Lua [r]=R [pl]=Perl [pm]=Perl
  [sh]=Shell [bash]=Bash [zsh]=Zsh [fish]=Fish [ps1]=PowerShell
  [html]=HTML [htm]=HTML [xhtml]=XHTML
  [css]=CSS [scss]=SCSS [sass]=Sass [less]=Less [styl]=Stylus
  [md]=Markdown [mdx]=MDX [rst]=reStructuredText [adoc]=AsciiDoc [txt]=Text
  [json]=JSON [jsonc]=JSONC [json5]=JSON5
  [yaml]=YAML [yml]=YAML [toml]=TOML [ini]=INI [cfg]=Config [conf]=Config [env]=Dotenv
  [xml]=XML [svg]=SVG
  [sql]=SQL [graphql]=GraphQL [gql]=GraphQL [proto]=Protobuf [prisma]=Prisma
  [tf]=Terraform [tfvars]=Terraform [hcl]=HCL [gradle]=Gradle
)

detect_lang() {
  local path="$1" base="${1##*/}"
  local ext="${base##*.}"; [[ "$ext" == "$base" ]] && ext=""
  local e="${ext,,}"
  case "${base,,}" in
    dockerfile*)          echo "Dockerfile" ;;
    makefile|gnumakefile) echo "Makefile" ;;
    cmakelists.txt)       echo "CMake" ;;
    *)                    echo "${LANG_MAP[$e]:-${e:-Text}}" ;;
  esac
}

# ── 5. Priority ordering ─────────────────────────────────────────────────────
priority_of() {
  local f="$1" base="${1##*/}"
  case "$base" in
    README*|readme*|LICENSE*|license*|COPYING*|CHANGELOG*|changelog*|CONTRIBUTING*|CODE_OF_CONDUCT*|NOTICE|AUTHORS) echo 0; return ;;
  esac
  case "$base" in
    package.json|tsconfig.json|jsconfig.json|vite.config.*|webpack.config.*|rollup.config.*|next.config.*|nuxt.config.*|astro.config.*|svelte.config.*|tailwind.config.*|postcss.config.*|babel.config.*|.babelrc|.eslintrc*|.prettierrc*|Cargo.toml|pyproject.toml|setup.py|setup.cfg|requirements.txt|Pipfile|go.mod|Gemfile|composer.json|pom.xml|build.gradle*|Dockerfile*|docker-compose.*|Makefile|CMakeLists.txt|justfile) echo 1; return ;;
  esac
  case "$f" in
    src/index.*|src/main.*|src/App.*|src/app.*|src/server.*|src/client.*|index.*|main.*|app.*|server.*|cli.*) echo 2; return ;;
    src/*|app/*|lib/*|packages/*|cmd/*|internal/*|components/*|pages/*|hooks/*|styles/*|public/*) echo 3; return ;;
    test/*|tests/*|__tests__/*|spec/*|e2e/*|cypress/*|playwright/*|*.test.*|*.spec.*) echo 5; return ;;
    docs/*|doc/*|examples/*|example/*|*.md|*.mdx|*.rst) echo 6; return ;;
  esac
  echo 4
}

log "Sorting by importance…"
tmp="$(mktemp)"
for f in "${TEXT_PATHS[@]}"; do
  printf '%s\t%s\n' "$(priority_of "$f")" "$f"
done | LC_ALL=C sort -k1,1n -k2,2 > "$tmp"
ORDERED=()
while IFS=$'\t' read -r _ f; do ORDERED+=("$f"); done < "$tmp"
rm -f "$tmp"

# ── 6. Metadata ──────────────────────────────────────────────────────────────
COMMIT="$(git rev-parse HEAD 2>/dev/null || echo '—')"
BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo '—')"
AUTHOR="$(git log -1 --pretty=format:'%an <%ae>' 2>/dev/null || echo '—')"
COMMIT_DATE="$(git log -1 --pretty=format:'%ad' --date=iso 2>/dev/null || echo '—')"
NOW="$(date -u '+%Y-%m-%d %H:%M:%S UTC')"

STACK_PARTS=()
if [[ -f package.json ]]; then
  grep -q '"next"'       package.json 2>/dev/null && STACK_PARTS+=("Next.js")
  grep -q '"react"'      package.json 2>/dev/null && STACK_PARTS+=("React")
  grep -q '"vue"'        package.json 2>/dev/null && STACK_PARTS+=("Vue")
  grep -q '"typescript"' package.json 2>/dev/null && STACK_PARTS+=("TypeScript")
  grep -qi '"tailwind'   package.json 2>/dev/null && STACK_PARTS+=("TailwindCSS")
  STACK_PARTS+=("Node.js")
fi
[[ -f requirements.txt || -f pyproject.toml ]] && STACK_PARTS+=("Python")
[[ -f Cargo.toml ]]   && STACK_PARTS+=("Rust")
[[ -f go.mod ]]       && STACK_PARTS+=("Go")
[[ -f Gemfile ]]      && STACK_PARTS+=("Ruby")
[[ -f composer.json ]]&& STACK_PARTS+=("PHP")
[[ -f Dockerfile || -f docker-compose.yml ]] && STACK_PARTS+=("Docker")
STACK="—"
(( ${#STACK_PARTS[@]} )) && STACK="$(printf '%s\n' "${STACK_PARTS[@]}" | awk '!seen[$0]++' | paste -sd ', ' -)"

# ── 7. Statistics (per language) ─────────────────────────────────────────────
declare -A LANG_FILES=() LANG_BYTES=()
TOTAL_BYTES=0
for f in "${TEXT_PATHS[@]}"; do
  sz="${F_SIZE[$f]:-0}"
  (( sz > MAX_BYTES )) && continue
  lang="$(detect_lang "$f")"
  LANG_FILES["$lang"]=$(( ${LANG_FILES[$lang]:-0} + 1 ))
  LANG_BYTES["$lang"]=$(( ${LANG_BYTES[$lang]:-0} + sz ))
  TOTAL_BYTES=$(( TOTAL_BYTES + sz ))
done
TOKEN_EST=$(( TOTAL_BYTES / 4 ))

# ── 8. Write output ──────────────────────────────────────────────────────────
log "Writing ${B}${OUTPUT}${N}…"

{
  echo "╔══════════════════════════════════════════════════════════════════════════╗"
  printf '║        VEDICURJ · FULL REPOSITORY SNAPSHOT · v%-8s              ║\n' "$VERSION"
  echo "╚══════════════════════════════════════════════════════════════════════════╝"
  echo
  echo "┌─ OVERVIEW ───────────────────────────────────────────────────────────────┐"
  printf '│ Repository  : %s\n' "$REPO_NAME"
  printf '│ Remote      : %s\n' "$REPO_REMOTE"
  printf '│ Root        : %s\n' "$REPO_ROOT"
  printf '│ Commit      : %s\n' "$COMMIT"
  printf '│ Branch      : %s\n' "$BRANCH"
  printf '│ Author      : %s\n' "$AUTHOR"
  printf '│ Commit Date : %s\n' "$COMMIT_DATE"
  printf '│ Stack       : %s\n' "$STACK"
  printf '│ Generated   : %s\n' "$NOW"
  printf '│ Tracked     : %s files\n' "$(commas "$TOTAL")"
  printf '│ With Code   : %s files\n' "$(commas "$TEXT_N")"
  printf '│ Total Size  : %s\n' "$(human_size "$TOTAL_BYTES")"
  printf '│ Est. Tokens : ~%s\n' "$(commas "$TOKEN_EST")"
  echo "└──────────────────────────────────────────────────────────────────────────┘"

  echo
  echo "┌─ LANGUAGE STATISTICS ────────────────────────────────────────────────────┐"
  top="$(for k in "${!LANG_BYTES[@]}"; do
    printf '%12d\t%s\n' "${LANG_BYTES[$k]}" "$k"
  done | sort -rn | head -20)"
  while IFS=$'\t' read -r bytes lang; do
    [[ -z "$lang" ]] && continue
    pct=$(( bytes * 100 / (TOTAL_BYTES ? TOTAL_BYTES : 1) ))
    w=28; fill=$(( pct * w / 100 ))
    bar="$(printf '%*s' "$fill" '' | tr ' ' '█')"
    pad="$(printf '%*s' $((w-fill)) '' | tr ' ' '░')"
    printf '│ %-14s %s%s%s %3d%%  %4d files  %9s\n' \
      "$lang" "$G" "$bar$pad" "$N" "$pct" "${LANG_FILES[$lang]}" "$(human_size "$bytes")"
  done <<< "$top"
  echo "└──────────────────────────────────────────────────────────────────────────┘"

  # Full directory tree (all tracked files)
  echo
  echo "┌─ FULL DIRECTORY TREE ────────────────────────────────────────────────────┐"
  printf '%s\n' "${ALL_FILES[@]}" | LC_ALL=C sort | awk -F/ '
    {
      n = NF; path = "";
      for (i = 1; i < n; i++) {
        path = path "/" $i;
        if (!(path in seen)) {
          seen[path] = 1;
          indent = "";
          for (j = 1; j < i; j++) indent = indent "│   ";
          printf "│ %s├── 📁 %s/\n", indent, $i;
        }
      }
      indent = "";
      for (j = 1; j < n; j++) indent = indent "│   ";
      printf "│ %s├── 📄 %s\n", indent, $n;
    }'
  echo "└──────────────────────────────────────────────────────────────────────────┘"

  # Manifest
  echo
  echo "┌─ FILE MANIFEST ──────────────────────────────────────────────────────────┐"
  i=0
  for f in "${ORDERED[@]}"; do
    ((i++))
    printf '│ %4d. %-58s %10s\n' "$i" "$f" "$(human_size "${F_SIZE[$f]:-0}")"
  done
  echo "└──────────────────────────────────────────────────────────────────────────┘"

  # Contents
  echo
  echo "╔══════════════════════════════════════════════════════════════════════════╗"
  echo "║                              FILE CONTENTS                               ║"
  echo "╚══════════════════════════════════════════════════════════════════════════╝"

  idx=0
  for f in "${ORDERED[@]}"; do
    ((idx++))
    sz="${F_SIZE[$f]:-0}"
    if (( sz > MAX_BYTES )); then
      warn "skip (too big): $f ($(human_size "$sz"))"
      continue
    fi
    lang="$(detect_lang "$f")"

    # Read via mapfile (builtin, no fork), keep local array
    LINES=()
    if [[ -r "$f" ]]; then
      mapfile -t LINES < "$f" 2>/dev/null || true
    fi
    nlines=${#LINES[@]}

    printf '\n'
    printf '┌─ [%04d/%04d] %s\n' "$idx" "$TEXT_N" "$f"
    printf '│ Language: %-14s  Size: %-10s  Lines: %d\n' "$lang" "$(human_size "$sz")" "$nlines"
    printf '└'
    printf '─%.0s' {1..74}
    printf '\n'
    printf '```%s\n' "${lang,,}"
    if (( nlines > 0 )); then
      printf '%s\n' "${LINES[@]}"
    fi
    printf '```\n'
  done

  echo
  echo "╔══════════════════════════════════════════════════════════════════════════╗"
  printf '║  END OF SNAPSHOT · %s files · %s · ~%s tokens\n' \
    "$(commas "$TEXT_N")" "$(human_size "$TOTAL_BYTES")" "$(commas "$TOKEN_EST")"
  echo "╚══════════════════════════════════════════════════════════════════════════╝"
} > "$OUTPUT"

FINAL_SIZE=$(wc -c < "$OUTPUT" | tr -d '[:space:]')

echo
ok "${B}Done!${N}"
printf '   %sOutput :%s %s\n' "$B" "$N" "$OUTPUT"
printf '   %sSize   :%s %s\n' "$B" "$N" "$(human_size "$FINAL_SIZE")"
printf '   %sFiles  :%s %d with code / %d tracked\n' "$B" "$N" "$TEXT_N" "$TOTAL"
printf '   %sTokens :%s ~%s\n' "$B" "$N" "$(commas "$TOKEN_EST")"
printf '   %sStack  :%s %s\n' "$B" "$N" "$STACK"
echo