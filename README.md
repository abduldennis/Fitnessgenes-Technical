#Steps to make sure the app works as expected without any issues.

1. If you have node/npm already installed then continue to next step otherwise install node.js using the downloader from their website https://nodejs.org/en/download/. this will install node and npm.

2. run **'npm i'** inside the src folder.

3. run **'npm run build-css'** inside the src folder. (if this does not work run 'npm install node-sass' first)

4. run **'http-server'** inside the src folder and that will give you a list of local urls to view the app in. 
(if this does not work run 'npm install http-server' first)

5. You can view the app using the localhost urls given in the command line.

#Additional information

I am saving the number of adolescents,unlicensed users and first car users in localstorage but not displaying it. If you wish you can view that information after doing multiple surveys by doing console log in the chrome inspector:
```console.log(localStorage.getItem("adolescents"))```
```console.log(localStorage.getItem("unlicensedUsers"))```
```console.log(localStorage.getItem("firstcarUsers"))```

index.html can be found inside public folder.

public/main.css includes the compliled sass.

You can complile sass using 'npm run build-css' or watch css files using 'npm run watch-css'.

You can also simply run the index.html from within /public folder.
