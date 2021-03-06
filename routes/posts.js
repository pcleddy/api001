var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3');
var path = require('path')
var db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'blog.db'));

router.get('/', function(req, res) {

  var posts = [];
    db.each("SELECT rowid as post_id, title, body FROM posts", function(err, row) {
        if (err) res.send(err);
        posts.push({post_id: row.post_id, title: row.title, body: row.body})
    }, function() {
        res.json(posts)
    });
});

module.exports = router;
