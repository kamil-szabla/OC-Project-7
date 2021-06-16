let db = require("../dbConfig");

exports.addPost = (req, res, next) => {
  let sql =
    'INSERT INTO Posts (Title, Media, Text, createdBy) VALUES ("' +
    req.body.title +
    '", "' +
    '../assets/' +
    req.file.originalname +
    '", "' +
    req.body.text +
    '", "' +
    req.body.createdBy +
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
       message: "Post saved successfully!",
      });
    });
    console.log(req.file);
};

exports.getAllPosts = (req, res, next) => {
  let sql =
    "SELECT Posts.id, Posts.title, Posts.text, Posts.media, Posts.createdBy, Posts.created_at FROM Posts INNER JOIN Users ON Posts.CreatedBy=Users.username;";
  db.query(sql, function(err, result, fields) {
    if (err)
      return res.json({
        status: err.status,
        message: err.sqlMessage,
        data: err,
      });
    res.json(result);
  });
};

exports.getSinglePost = (req, res, next) => {
  let sql = 'SELECT * FROM Posts WHERE id = "' + req.params.id + '";';
  db.query(sql, function(err, result, fields) {
    if (err)
      return res.json({
        status: err.status,
        message: err.sqlMessage,
        data: err,
      });
    res.json({
      status: "200",
      message: null,
      data: result,
    });
    console.log(result)
  });
};

exports.commentPost = (req, res, next) => {
  let sql =
    'INSERT INTO Comments (Text, CreatedBy, PostId) VALUES ("' +
    req.body.text +
    '", "' +
    req.body.createdBy +
    '", "' +
    req.body.postId +
    '")';
    db.query(sql, function(err, result, fields) {
      if (err)
        return res.json({
          status: err.status,
          message: err.sqlMessage,
          data: err,
        });
      res.json({
        status: "201",
        message: "Comment saved successfully!",
        data: result,
      });
    });
};

exports.getComments = (req, res, next) => {
  let sql = 'SELECT * FROM Comments WHERE PostId = "' + req.params.id + '";';
  db.query(sql, function(err, result, fields) {
    if (err)
      return res.json({
        status: err.status,
        message: err.sqlMessage,
        data: err,
      });
    res.json({
      status: "200",
      message: null,
      data: result,
    });
    console.log(result);
  });
};