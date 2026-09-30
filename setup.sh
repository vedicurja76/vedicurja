#!/bin/bash
set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🔧 Git Push Fix Utility${NC}"
echo ""

# ------------------------------------------------------------
# 1. Show current status
# ------------------------------------------------------------
BRANCH=$(git rev-parse --abbrev-ref HEAD)
REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "no-remote")
CURRENT_USER=$(git config user.name || echo "unknown")
CURRENT_EMAIL=$(git config user.email || echo "unknown")

echo -e "${BLUE}📌 Current Branch:${NC} $BRANCH"
echo -e "${BLUE}📌 Remote URL:${NC} $REMOTE_URL"
echo -e "${BLUE}📌 Git User:${NC} $CURRENT_USER <$CURRENT_EMAIL>"
echo ""

# ------------------------------------------------------------
# 2. Show authentication status
# ------------------------------------------------------------
echo -e "${BLUE}🔐 Checking authentication...${NC}"
AUTH_USER=$(git ls-remote origin HEAD 2>&1 | head -1 || echo "auth-failed")
echo "   Remote response: $AUTH_USER"
echo ""

# ------------------------------------------------------------
# 3. Prompt for action
# ------------------------------------------------------------
echo -e "${YELLOW}Choose an action:${NC}"
echo "  1) Change remote URL to your own repo"
echo "  2) Set Git user.name and user.email for this repo"
echo "  3) Force push with credentials (as current user)"
echo "  4) Pull → Stage → Commit → Push (auto)"
echo "  5) Exit"
read -p "Enter choice [1-5]: " CHOICE

case $CHOICE in
  # ----------------------------------------------------------
  1)
    echo ""
    read -p "Enter new remote URL (e.g., https://github.com/your-username/repo.git): " NEW_URL
    git remote set-url origin "$NEW_URL"
    echo -e "${GREEN}✅ Remote URL updated to: $NEW_URL${NC}"
    ;;

  # ----------------------------------------------------------
  2)
    echo ""
    read -p "Enter Git user.name: " GIT_NAME
    read -p "Enter Git user.email: " GIT_EMAIL
    git config user.name "$GIT_NAME"
    git config user.email "$GIT_EMAIL"
    echo -e "${GREEN}✅ Git user updated: $GIT_NAME <$GIT_EMAIL>${NC}"
    ;;

  # ----------------------------------------------------------
  3)
    echo ""
    echo -e "${YELLOW}⚠️  Force push will overwrite remote history.${NC}"
    read -p "Are you sure? (y/N): " CONFIRM
    if [[ "$CONFIRM" =~ ^[Yy]$ ]]; then
      # Prompt for credentials
      read -p "GitHub username: " GH_USER
      read -s -p "GitHub personal access token: " GH_TOKEN
      echo ""
      # Extract repo path from existing URL
      REPO_PATH=$(echo "$REMOTE_URL" | sed -E 's|https://github.com/||' | sed 's|\.git$||')
      NEW_URL="https://${GH_USER}:${GH_TOKEN}@github.com/${REPO_PATH}.git"
      git push "$NEW_URL" "$BRANCH" --force
      echo -e "${GREEN}✅ Force pushed to $BRANCH${NC}"
    else
      echo "Cancelled."
    fi
    ;;

  # ----------------------------------------------------------
  4)
    echo ""
    echo -e "${BLUE}🔄 Pulling latest changes...${NC}"
    git pull origin "$BRANCH" --no-edit || echo -e "${YELLOW}⚠️  Pull failed or no upstream. Continuing...${NC}"

    echo -e "${BLUE}📝 Staging all changes...${NC}"
    git add .

    # Check for changes
    if [[ -z $(git status -s) ]]; then
      echo -e "${YELLOW}✅ No changes to commit.${NC}"
    else
      read -p "Commit message (default: 'Update'): " COMMIT_MSG
      COMMIT_MSG=${COMMIT_MSG:-Update}
      git commit -m "$COMMIT_MSG"
      echo -e "${GREEN}✅ Committed: $COMMIT_MSG${NC}"
    fi

    echo -e "${BLUE}🚀 Pushing to origin/$BRANCH...${NC}"
    if git push origin "$BRANCH"; then
      echo -e "${GREEN}✅ Pushed successfully!${NC}"
    else
      echo -e "${RED}❌ Push failed. Run option 2 to update Git user, or option 1 to change remote.${NC}"
      exit 1
    fi
    ;;

  # ----------------------------------------------------------
  5)
    echo "Exiting."
    exit 0
    ;;

  *)
    echo -e "${RED}Invalid choice.${NC}"
    exit 1
    ;;
esac

echo ""
echo -e "${GREEN}🎯 Done.${NC}"