var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/side-page1", (req,res,next) => {
  res.render("side-page1");
})
router.get("/side-page2", (req,res,next) => {
  res.render("side-page2");
})
module.exports = router;
