# node-bakery-formula
NodeJS - Formula Panadera: Crear Api para crear, modificar y eliminar harinas, ingredientes y recetas

```
-----------------------------------------------------------------------------
Crear proyecto y base de datos en Mongo Atlas
-----------------------------------------------------------------------------
 1.- Crear Organizacion (name)
 2.- Crear proyecto (name)
 3.- Crear Cluster: JsNode (puede contener varias Bases de datos)
 4.- Crear User: user/pass: _USER_/_PASSWORD_
 5.- Crear acceso al cluster: (ALLOW ACCESS FROM ANYWHERE) 
      - user _USER_
      - Add a connection IP address: Allow Access  from AnyWhere
      - Create a database user: user/password: _USER_/_PASSWORD_
 6.- Metodo de conexión: Mongo para App (JS)
    - mongodb+srv://<user>:<password>@xyz.net/?retryWrites=true&w=majority 

-----------------------------------------------------------------------------

-----------------------------------------------------------------------------
-----------------------------------------------------------------------------
Crear Proyecto Node en VSC 
-----------------------------------------------------------------------------
$ npm init -y
-----------------------------------------------------------------------------
 - Agregar valores package Json:
     - "description": "Plsroyecto de Node con Mongo DB - Formula Panadera",
      "scripts": {
          "dev": "set DEBUG=app:* & nodemon index.js"
      },
     - "keywords": [
          "node",
          "Javascript",
          "MongoDB"
          ],
     - "author": "wlopera",
     - "license": "MIT"
-----------------------------------------------------------------------------
- Instalar librerias
  - express: npm i express -> 4.18.1
  - Mongo: npm i mongodb@4.6.0 -> 4.6.0 
  - dotenv: npm i dotend  -> 16.0.1
  - nodemon: npm i nodemon --save-dev (solo para desarrollo) -> 2.0.18
  - http-errors: mp, i http-errors -> 2.0.0
  - cors:nom i cors -> 2.8.5

-----------------------------------------------------------------------------
- Agregar archivo: .gitignore -> control de data al repo

-----------------------------------------------------------------------------
- Crear carpetas
  - src
    - common
    - config
    - database
    - flours
    - ingredients

-----------------------------------------------------------------------------
 - Crear servidor con express
     - Crear arcvhivo .env (Parámetras DEV)
     - Archivo de configuración: \src\config\index.js
     - Archivo inicial: index.js (raiz del proyecto)
     - Crear Apis: servicios, controladores e index para Harinas e ingredientes
     - Crear archivo para el servidor e integrar los apis

 - Levantar servidor: npm run dev
```

## Api Harias. Ejemplo 
![Captura1](https://user-images.githubusercontent.com/7141537/177805258-6ba2d810-6faa-467a-bd21-8362142820d4.PNG)
![Captura](https://user-images.githubusercontent.com/7141537/177805263-f2f66598-9d59-406f-b474-5337dec30f02.PNG)

