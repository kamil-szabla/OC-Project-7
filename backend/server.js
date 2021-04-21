const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const apiRoutes = require('./routes/post.routes');
app.use('/api', apiRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port: http://localhost:${PORT}`);
  });
});

require("./routes/post.routes")(app);
