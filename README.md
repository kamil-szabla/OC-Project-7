# oc-project-7

This is a App that allows to create user profiles securely and let each user add posts in the application. Post can be send with pictures or gif's, as well as some descriptions.

Each post can be commented by users, allowing them to discusse or share opinions on specific topic. Whenever new post is added, corresponding badge next to the post will be displayed in the UI informing about it. This way users can easly notice which post is new and unseen by them.

All the data is stored in database, in this project I used mySQL.

Aplication stack:

BACKEND:
- express
- sequelize
- bcrypt
- body-parser
- multer
- cors
- mysql2

FRONTEND:
- vue
- axios
- bootstrap
- sass


## Project setup
```
npm install
```

### Build Vue 
```
npm run serve
```

### Connect to server and database
```
change directory to 'backend'

run command - nodemon server.js
```

