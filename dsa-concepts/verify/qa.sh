#!/usr/bin/env bash
# The whole harness, in dependency order. Non-zero on the first failure. No skips.
set -e
cd "$(dirname "$0")/.."
# NOT piped into sed: with a pipe, set -e only sees the LAST command, so a failed build
# printed BUILD FAILED and QA still went green. Found by hitting it while writing 7.2.
echo "1/9 build";        python3 build.py
echo "2/9 style";        python3 verify/check_style.py
echo "3/9 js syntax";    bash   verify/check_js.sh
echo "4/9 renderers";    node   verify/check_renderers.mjs
echo "5/9 layout";       node   verify/check_layout.mjs
echo "6/9 lessons";      python3 verify/check_lesson.py
echo "7/9 contract";     python3 verify/check_contract.py
echo "8/9 reel time";    python3 verify/reel_time.py --check
echo "9/9 docs";         python3 verify/sync_docs.py --check
echo "QA GREEN"
