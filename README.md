# Intro to Node.js

npm init ------- cmd
express install ------- cmd

- install nodemon for auto restart
  "scripts": {
  "start": "node index.js",
  "start-dev": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
  }

  npm run start-dev ----cmd

### dynamic api
- req.params.id

### use query parameter
- req.query.search

### Middleware [cros]
- npm install cors --- cmd

var cors = require('cors')
app.use(cors())