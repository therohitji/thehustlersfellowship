#!/usr/bin/env bash
# The generated master must contain syntactically valid JS and balanced template literals.
set -e
cd "$(dirname "$0")/.."
M=dsa-concepts-master.html
test -s "$M" || { echo "FAIL: $M missing"; exit 1; }
python3 -c "
m=open('$M',encoding='utf-8').read()
s=m.rsplit('<script>',1)[1].rsplit('</script>',1)[0]
open('/tmp/dsa_check.js','w',encoding='utf-8').write(s)
if s.count('\`')%2:
    raise SystemExit('FAIL: unbalanced backticks in the master script')
print('  backticks balanced')
"
node --check /tmp/dsa_check.js
echo "  node --check clean"
