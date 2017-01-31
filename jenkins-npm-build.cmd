set PATH=C:\Program Files\nodejs;C:\Users\Administrator\AppData\Roaming\npm;%PATH%

call npm prune
call npm install

set CI=true
call npm test
set CI=

call npm run build
