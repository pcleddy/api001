var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3');
var path = require('path')
var db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'blog.db'));

router.post('/', function(req, res) {

  //var stmt = db.prepare("INSERT INTO posts (title, body) VALUES (?, ?)");
  db.run("INSERT INTO posts (title, body) VALUES (?, ?)", req.body.title, req.body.body, function(err) {
    if (err) res.send(err);
    res.json({ message: 'set post!' });
  });
});

module.exports = router;
