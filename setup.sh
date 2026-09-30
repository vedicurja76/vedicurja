#!/bin/bash
set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🔧 Setting up GitHub CLI in Git Bash${NC}"

# Common install locations to check
GH_PATHS=(
  "/c/Program Files/GitHub CLI/gh.exe"
  "/c/Program Files (x86)/GitHub CLI/gh.exe"
  "$HOME/AppData/Local/GitHubCLI/gh.exe"
  "$LOCALAPPDATA/Programs/GitHub CLI/gh.exe"
)

GH_BIN=""
for path in "${GH_PATHS[@]}"; do
  if [ -f "$path" ]; then
    GH_BIN="$path"
    break
  fi
done

if [ -z "$GH_BIN" ]; then
  echo -e "${RED}❌ GitHub CLI not found. Please install it first:${NC}"
  echo "   winget install --id GitHub.cli"
  exit 1
fi

echo -e "${GREEN}✅ Found GH at: $GH_BIN${NC}"

# Determine install dir (for PATH)
GH_DIR=$(dirname "$GH_BIN")
GH_DIR_UNIX=$(echo "$GH_DIR" | sed 's|^C:|/c|' | tr '\\' '/')

# Add to .bashrc if not already
if ! grep -q "GitHub CLI" ~/.bashrc 2>/dev/null; then
  echo -e "${BLUE}📝 Adding GH to ~/.bashrc...${NC}"
  echo "" >> ~/.bashrc
  echo "# GitHub CLI PATH" >> ~/.bashrc
  echo "export PATH=\"\$PATH:$GH_DIR_UNIX\"" >> ~/.bashrc
  echo -e "${GREEN}✅ Added to ~/.bashrc${NC}"
fi

# Export for current session
export PATH="$PATH:$GH_DIR_UNIX"

# Verify
if command -v gh &> /dev/null; then
  echo -e "${GREEN}✅ gh now available: $(gh --version | head -1)${NC}"
else
  echo -e "${RED}❌ Still not available. Run manually:${NC}"
  echo "   export PATH=\"\$PATH:$GH_DIR_UNIX\""
  exit 1
fi

# Authenticate if not already
echo ""
if gh auth status &> /dev/null; then
  echo -e "${GREEN}✅ Already authenticated.${NC}"
else
  echo -e "${YELLOW}🔐 Please authenticate with GitHub:${NC}"
  gh auth login
fi

# Setup Git integration
gh auth setup-git

# Show pending commits
echo ""
echo -e "${BLUE}📌 Pending commits:${NC}"
git log origin/main..HEAD --oneline 2>/dev/null || echo "   (no upstream tracking)"

# Push
BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo ""
echo -e "${BLUE}🚀 Pushing to origin/$BRANCH...${NC}"
git push origin "$BRANCH"

echo ""
echo -e "${GREEN}✅ All commits pushed successfully!${NC}"