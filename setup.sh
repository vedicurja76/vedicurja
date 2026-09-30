#!/bin/bash
set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🔐 GitHub Auth Fixer for VedicUrja Vastu Dome${NC}"
echo ""

# ─────────────────────────────────────────────
# 1. Show current state
# ─────────────────────────────────────────────
echo -e "${BLUE}📌 Current git configuration:${NC}"
echo "   User:    $(git config user.name) <$(git config user.email)>"
echo "   Remote:  $(git remote get-url origin 2>/dev/null || echo 'none')"
echo ""

# ─────────────────────────────────────────────
# 2. Warn about token exposure
# ─────────────────────────────────────────────
echo -e "${YELLOW}⚠️  IMPORTANT:${NC}"
echo "   If you've ever shared your token publicly, delete it now at:"
echo "   https://github.com/settings/tokens"
echo ""
read -p "Have you created a fresh, valid token? (y/N): " CONFIRM
if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
  echo -e "${RED}❌ Please create a new token first. Aborting.${NC}"
  exit 1
fi

# ─────────────────────────────────────────────
# 3. Gather credentials
# ─────────────────────────────────────────────
read -p "GitHub username: " GH_USER
read -sp "GitHub Personal Access Token: " GH_TOKEN
echo ""

# Get repo path from existing remote
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null || echo "")
if [[ -z "$CURRENT_REMOTE" ]]; then
  read -p "Repository (e.g., owner/repo): " GH_REPO
else
  GH_REPO=$(echo "$CURRENT_REMOTE" | sed 's|https://.*github.com/||' | sed 's|\.git$||')
  echo -e "${BLUE}📦 Detected repo: ${GH_REPO}${NC}"
fi

# ─────────────────────────────────────────────
# 4. Set correct git user
# ─────────────────────────────────────────────
echo -e "${BLUE}👤 Setting git user to $GH_USER...${NC}"
git config user.name "$GH_USER"
read -p "GitHub email (or press Enter to use noreply): " GH_EMAIL
if [[ -z "$GH_EMAIL" ]]; then
  GH_EMAIL="${GH_USER}@users.noreply.github.com"
fi
git config user.email "$GH_EMAIL"

# ─────────────────────────────────────────────
# 5. Set remote with credentials
# ─────────────────────────────────────────────
echo -e "${BLUE}🔗 Setting remote with token auth...${NC}"
git remote set-url origin "https://${GH_USER}:${GH_TOKEN}@github.com/${GH_REPO}.git"
echo -e "${GREEN}✅ Remote updated.${NC}"
echo ""

# ─────────────────────────────────────────────
# 6. Test connection
# ─────────────────────────────────────────────
echo -e "${BLUE}🧪 Testing connection...${NC}"
if git ls-remote origin >/dev/null 2>&1; then
  echo -e "${GREEN}✅ Authentication works!${NC}"
else
  echo -e "${RED}❌ Authentication failed.${NC}"
  echo -e "${YELLOW}   Check:${NC}"
  echo "   • Token has 'repo' scope"
  echo "   • Token belongs to the correct account"
  echo "   • You are a collaborator on the repo"
  exit 1
fi

# ─────────────────────────────────────────────
# 7. Stage, commit, push
# ─────────────────────────────────────────────
echo ""
echo -e "${BLUE}📦 Staging all changes...${NC}"
git add .

if [[ -z $(git status -s) ]]; then
  echo -e "${YELLOW}ℹ️  No changes to commit.${NC}"
else
  read -p "Commit message (default: auto): " MSG
  MSG="${MSG:-Auto-commit: $(date '+%Y-%m-%d %H:%M')}"
  git commit -m "$MSG"
  echo -e "${GREEN}✅ Committed.${NC}"
fi

echo -e "${BLUE}⬇️  Pulling latest...${NC}"
git pull --rebase origin main 2>/dev/null || echo -e "${YELLOW}⚠️  Pull skipped (fresh repo).${NC}"

echo -e "${BLUE}⬆️  Pushing to origin/main...${NC}"
if git push origin main; then
  echo -e "${GREEN}🎯 All done! Changes pushed successfully.${NC}"
else
  echo -e "${RED}❌ Push failed. Re-check token scopes and repo access.${NC}"
  exit 1
fi