var express = require('express');
var con = require('./config');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session)
  {
      req.session.destroy(function(err)
      {
          if(err)
          {
            return next(err);
          }
          else
          {
            return res.redirect('/');
          }
      });
    }
});
module.exports = router;
