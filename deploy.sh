#!/usr/bin/env bash
# One-shot deploy for the Hustlers Fellowship site.
# Updates all three places in one go:
#   1. Local folder: rebuilds both courses from sources
#   2. GitHub:       commits and pushes (therohitji/thehustlersfellowship)
#   3. Hostinger:    uploads the live files (hustlersfellowship.com)
#
# Usage:
#   bash deploy.sh "what you changed"
#
# Upload credentials are read from .env (git-ignored, never pushed to GitHub).
set -e
cd "$(dirname "$0")"
MSG="${1:-Update site}"

echo "▸ 1/3  Rebuilding courses from sources..."
python3 ai-pm-2026/build.py >/dev/null
python3 build-live-products-2026/build.py >/dev/null
echo "       done."

echo "▸ 2/3  Commit + push to GitHub..."
git add -A
git commit -m "$MSG" || echo "       (nothing new to commit)"
git push origin main
echo "       pushed."

echo "▸ 3/3  Upload live files to Hostinger..."
set -a; . ./.env; set +a
# Each course is served as <clean-name>/index.html so it gets a short, shareable URL
# (hustlersfellowship.com/aipm, hustlersfellowship.com/buildliveproducts).
upload() {  # $1 = local source file, $2 = clean path on the server
  curl -sS --connect-timeout 30 --max-time 240 --ftp-create-dirs \
    -T "$1" -u "$FTP_USER:$FTP_PASS" "ftp://$FTP_HOST/$2"
  echo "       ✓ /$2"
}
upload index.html                                               index.html
upload favicon.svg                                              favicon.svg
upload ai-pm-2026/ai-pm-course-master.html                      aipm/index.html
upload build-live-products-2026/build-live-products-master.html buildliveproducts/index.html

echo "✅ Done — local folder, GitHub, and hustlersfellowship.com all updated."
