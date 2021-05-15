let db = require("../dbConfig");

exports.addPost = (req, res, next) => {
  let sql =
    'INSERT INTO Posts (Title, Media, Text) VALUES ("' +
    req.body.title +
    '", "' +
    req.body.media +
    '", "' +
    req.body.text +
    '")';
   db.query(sql, function(err, result, fields) {
     if (err) {
       return res.json({
         status: err.status,
         message: err.sqlMessage,
         data: err,
       });
     } else
     res.status(201).json({
       status: "201",
       message: "Post saved successfully!"
     });
    });
};