// const express = require('express');
// const app = express();
// const db = require("./models");
// const PORT = process.env.PORT || 3000;
// const cors = require('cors')

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// const userRoutes = require("./routes/user");
// const postRoutes = require("./routes/posts");

// app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH");
//   next();
// });
    
// app.use("/api", userRoutes);
// app.use("/api/post", postRoutes);

// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`listening on: http://localhost:${PORT}`)
//   })
// })

// module.exports = app;

const http = require("http");
const app = require("./app");

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

server.listen(port);