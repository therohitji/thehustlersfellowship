#!/usr/bin/env bash
# Everything, in dependency order: the harness that proves it builds, the contract that
# proves it follows its own rules, and the browser passes that prove it works and does not
# look broken. Non-zero on the first failure. A skip is not a pass.
set -e
cd "$(dirname "$0")/.."

echo "=== 1. build and harness (8 checks) ==="
bash verify/qa.sh | tail -4

echo
echo "=== 2. block and reel contract ==="
python3 verify/check_contract.py

echo
echo "=== 3. driving it like a reader ==="
node verify/interact.mjs

echo
echo "=== 4. rendering every visual ==="
OUT="${1:-/tmp/dsa-shots}"
rm -rf "$OUT"
node verify/screenshots.mjs all "$OUT" | tail -3

echo
echo "ALL GREEN"
