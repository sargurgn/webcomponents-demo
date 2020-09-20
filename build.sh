echo 'Build client project'

cd testable-webcomponent
npm run build-wc

echo 'Restart ngnix server'

nginx -s stop
sleep 3
nginx
