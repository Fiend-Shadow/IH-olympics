const express = require('express');
const router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/side-page1", (req,res,next) => {
  res.render("side-page1");
})
router.get("/side-page2", (req,res,next) => {
  
  axios.get("https://athletes-json.herokuapp.com/athletes?ID=453" )
  .then((athleteOne) => {
    console.log(athleteOne);
    res.render("side-page2",{data: athleteOne.data});
  }).catch((err) => {
    console.log(err);
  });
  
})
module.exports = router;
