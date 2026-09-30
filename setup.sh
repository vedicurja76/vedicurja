#!/bin/bash
set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo -e "${BLUE}📌 Branch: ${GREEN}$BRANCH${NC}"

# 1. Stage all changes
if [[ -n $(git status -s) ]]; then
  git add .
  echo -e "${GREEN}✅ Staged changes${NC}"
else
  echo -e "${YELLOW}ℹ️  Nothing new to stage${NC}"
fi

# 2. Commit if staged
if ! git diff --cached --quiet; then
  MSG="${1:-Update: $(date '+%Y-%m-%d %H:%M')}"
  git commit -m "$MSG"
  echo -e "${GREEN}✅ Committed: $MSG${NC}"
else
  echo -e "${YELLOW}ℹ️  Nothing to commit${NC}"
fi

# 3. Pull with rebase
echo -e "${BLUE}⬇️  Pulling latest...${NC}"
git pull --rebase origin "$BRANCH" || true

# 4. Push
echo -e "${BLUE}⬆️  Pushing to origin/$BRANCH...${NC}"
if git push origin "$BRANCH"; then
  echo -e "${GREEN}🎉 Push successful!${NC}"
else
  echo -e "${RED}❌ Push failed. Check permissions or token.${NC}"
  exit 1
fi