const bcrypt = require("bcrypt");
// const User = require("../models/user");
const jwt = require("jsonwebtoken");
let db = require("../dbConfig");
// let jwtConfig = require("../config");
// let jwtString = jwtConfig.jwtString;

// exports.signup = (req, res, next) => {
//   bcrypt.hash(req.body.password, 12).then((hash) => {
//     let sql =
//       'INSERT INTO Users (Username, Email, Password) VALUES ("' +
//       req.body.username +
//       '", "' +
//       req.body.email +
//       '", "' +
//       hash +
//       '")';
//     db.query(sql, function(err, result, fields) {
//       if (err) {
//         if (err.sqlMessage.includes("Password"))
//           return res.status(500).json({
//             message: "Username already used!",
//             data: err,
//           });
//         if (err.sqlMessage.includes("Email"))
//           return res.status(500).json({
//             message: "Email already used!",
//             data: err,
//           });
//         else
//           return res.json({
//             status: err.status,
//             message: err.sqlMessage,
//             data: err,
//           });
//       } else 
//       res.status(200).json({
//         message: "User saved successfully!",
//         data: null,
//       });
//     });
//   });
// };

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 12).then((hash) => {
    let sql =
      'INSERT INTO Users (Username, Email, Password) VALUES ("' +
      req.body.username +
      '", "' +
      req.body.email +
      '", "' +
      hash +
      '")';
    db.query(sql, function(err, result, fields) {
      if (err) {
        if (err.sqlMessage.includes("user.username"))
          return res.status(200).json({
            message: "Username already used!",
            data: err,
          });
        if (err.sqlMessage.includes("users.email"))
          return res.status(200).json({
            message: "Email already used!",
            data: err,
          });
        else
          return res.json({
            status: 401,
            message: "Error occured, please try again!!!",
            data: err,
          });
      } else
        res.status(200).json({
          message: "User saved successfully!",
          data: null,
        });
    });
  });
};

exports.login = (req, res, next) => {
  let sqlFind =
    'SELECT * FROM Users WHERE Username="' + req.body.username + '";';
  db.query(sqlFind, function(err, result, fields) {
    if (err)
      return res.json({
        status: err.status,
        message: err.sqlMessage
      });
    if (result.length < 1)
      return res.json({
        status: 404,
        message: "User Not Found"
      });
    bcrypt
      .compare(req.body.password, result[0].password)
      .then((valid) => {
        if (!valid) {
          return res.json({
            status: 401,
            message: "Incorrect Password!"
          });
        }
        const token = jwt.sign(
          { userId: result[0].UserID }, 
          'RANDOM_NEW_TOKEN_ASSIGNED', 
          { expiresIn: "24h"}
          );
        res.status(200).json({
          status: 200,
          message: "Logged in successfully!",
          userId: result[0],
          token: token,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
};

// get user details
exports.getUserDetails = (req, res, next) => {
  let sql = 'SELECT * FROM Users WHERE id = "' + req.params.id + '";';
  db.query(sql, function(err, result, fields) {
    if (err)
      return res.json({
        status: err.status,
        message: err.sqlMessage,
        data: err
      });
    res.json({
      status: "200",
      message: null,
      data: result
    });
  });
};

exports.deleteProfile = (req, res, next) => {
  let sqlSelect =
    'SELECT * FROM Posts WHERE id = "' + req.params.id + '";';
  db.query(sqlSelect, function(err, result, fields) {
    if (err)
      return res.json({
        status: err.status,
        message: err.sqlMessage,
        data: err,
      });
  });
  let sql = 'DELETE FROM Users WHERE id = "' + req.params.id + '";';
  db.query(sql, function(err, result, fields) {
    if (err)
      return res.json({
        status: err.status,
        message: err.sqlMessage,
        data: err,
      });
    res.json({
      status: "200",
      message: "Profile Deleted",
      data: null,
    });
  });
};

// const Post = db.post;
// const User = db.user;

// exports.create = (user) => {
//   return User.create({
//     name: user.name,
//   })
//   .then((user) => {
//     console.log('Created tag: ' + JSON.stringify(user, null, 2));
//     return user
//   })
//   .catch((err) => {
//     console.log('Error: ' + err)
//   })
// }