var express = require('express');
var con = require('./config');
var router = express.Router();


/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.render('test');
});
router.get('/', function(req, res, next) {
  res.redirect('/province/add');
});
router.get('/add', function(req, res, next) {

      con.query("SELECT code,name_en,name_kh FROM province", function (err, result, fields) {
        if (err) throw err;
          res.render('province', { data: result });
      });
});
router.post('/add/save', function(req, res, next) {
      var id = req.body['procode']
      var name_en = req.body['proname']
      var name_kh = req.body['proname_kh']

      con.query("INSERT INTO province (`code`, `name_en`, `name_kh`) VALUES ('"+ id +"', '"+ name_en +"', '"+ name_kh +"')");
      res.redirect('/province/add');
});

router.post('/update/save', function(req, res, next) {
      var id = req.body['procode']
      var name_en = req.body['proname']
      var name_kh = req.body['proname_kh']

      con.query("UPDATE province SET `name_en`='"+ name_en +"', `name_kh`='"+ name_kh +"' WHERE code=" + id);
      res.redirect('/province/add');
});
router.get('/update/:id', function(req, res, next) {
    con.query("SELECT code,name_en,name_kh FROM province WHERE code=" + req.params.id, function (err, result, fields) {
    if (err) throw err;
          res.render('provinceupdate', { data: result });
    });
});
router.get('/delete/:id', function(req, res, next) {
    con.query("DELETE FROM province WHERE code=" + req.params.id);
    res.redirect('/province/add');
});

module.exports = router;
