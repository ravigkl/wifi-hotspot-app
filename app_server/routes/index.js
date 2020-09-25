var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */

/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

//controller
/*
const homePageController = (req, res) => {
  res.render('index', {title: 'express'});
};
*/

//using controller
router.get('/', ctrlMain.index);


module.exports = router;
