const express = require('express');
const router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
  
});

router.get("/side-page1", (req,res,next) => {
  axios.get("https://athletes-json.herokuapp.com/athletes")
  
  .then((athlete) => {
    
    
    
      
     
     
      res.render('side-page1',{athlete:athlete.data});
    
  }).catch((err) => {
    console.log(err);
  });
  
})
router.get("/side-page2", (req,res,next) => {

  axios.get("https://athletes-json.herokuapp.com/athletes?ID=453" )
  .then((athleteOne) => {
    
    res.render("side-page2",{data: athleteOne.data});
  }).catch((err) => {
    console.log(err);
  });
  
})
module.exports = router;
