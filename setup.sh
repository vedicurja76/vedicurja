#!/usr/bin/env bash
# push.sh — pull origin, then force-push local. Short and dumb.
set -e

REMOTE=origin
BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "▶ fetching $REMOTE…"
git fetch "$REMOTE" --prune || true

echo "▶ staging everything…"
git add -A

# purge junk from tracking
git rm -r --cached --ignore-unmatch .backups .env .env.local next-env.d.ts tsconfig.tsbuildinfo >/dev/null 2>&1 || true
git ls-files | grep -E '\.(bak|old|clean|fix)$' | while read -r f; do git rm --cached --ignore-unmatch "$f" >/dev/null 2>&1 || true; done

# make sure .gitignore covers junk
touch .gitignore
for l in ".env" ".env.local" ".env.*.local" ".next/" "out/" "node_modules/" \
         "next-env.d.ts" "tsconfig.tsbuildinfo" ".backups/" "*.bak" "*.bak_*" \
         "*.old" "*.clean" "*.fix" ".DS_Store"; do
  grep -qxF "$l" .gitignore 2>/dev/null || echo "$l" >> .gitignore
done
git add .gitignore

# commit if there's anything to commit
if ! git diff --cached --quiet; then
  git commit -m "sync local → origin $(date -u +%Y%m%d-%H%M%S)"
else
  echo "  (nothing to commit)"
fi

# rename master → main
[ "$BRANCH" = "master" ] && git branch -M main && BRANCH=main

echo "▶ pulling $REMOTE/$BRANCH (rebase, ignore conflicts by preferring local)…"
git pull --rebase "$REMOTE" "$BRANCH" --strategy=ours || true

echo "▶ pushing to $REMOTE/$BRANCH (force)…"
git push --force "$REMOTE" "$BRANCH"

echo "✓ done"
git --no-pager log --oneline -5
git --no-pager status -sb