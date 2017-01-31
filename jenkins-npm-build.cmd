set PATH=C:\Program Files\nodejs;C:\Users\Administrator\AppData\Roaming\npm;%PATH%
set CI=true

call npm prune
call npm install
call npm test
call npm run build
