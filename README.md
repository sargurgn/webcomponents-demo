# webcomponents-demo

### Build Web-Components
```sh build.sh```

Start Web Server
```
brew update
brew install nginx
```
Edit vi /usr/local/etc/nginx/nginx.conf to locate dist directory of webcomponents
```
location ~* \.(js|jpg|png|css)$ {
    root <path/to/cloned_location>/micro-front-ends/testable-webcomponent/dist;
}
```        

### Run Host App
```
cd react-host-app
npm install
npm start
```
