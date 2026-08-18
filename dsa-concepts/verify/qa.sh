#!/usr/bin/env bash
# The whole harness, in dependency order. Non-zero on the first failure. No skips.
set -e
cd "$(dirname "$0")/.."
echo "1/6 build";        python3 build.py | sed 's/^/  /'
echo "2/6 style";        python3 verify/check_style.py
echo "3/6 js syntax";    bash   verify/check_js.sh
echo "4/6 renderers";    node   verify/check_renderers.mjs
echo "5/6 layout";       node   verify/check_layout.mjs
echo "6/6 lessons";      python3 verify/check_lesson.py
echo "QA GREEN"
