#!/usr/bin/env bash
# The whole harness, in dependency order. Non-zero on the first failure. No skips.
set -e
cd "$(dirname "$0")/.."
echo "1/7 build";        python3 build.py | sed 's/^/  /'
echo "2/7 style";        python3 verify/check_style.py
echo "3/7 js syntax";    bash   verify/check_js.sh
echo "4/7 renderers";    node   verify/check_renderers.mjs
echo "5/7 layout";       node   verify/check_layout.mjs
echo "6/7 lessons";      python3 verify/check_lesson.py
echo "7/7 docs";         python3 verify/sync_docs.py --check
echo "QA GREEN"
