var express = require('express');
var con = require('./config');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/verify', function(req, res, next) {
    var username = req.body['username']
    var password = req.body['password']

    con.query("SELECT ID FROM users WHERE Login='" + username + "' AND Password='" + password +"' LIMIT 1", function (err, result, fields) {
        if (err) throw err;
        if(result.length>0)
        {
          req.session.userid = result[0].ID;
          res.redirect('/province');
        }
        else
        {
              //res.redirect('/login');
        }
        //res.send("SELECT ID FROM users WHERE Login='" + username + "' AND Password='" + password +"' LIMIT 1");
    });

});

module.exports = router;
