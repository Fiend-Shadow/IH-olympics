const express = require('express');
const router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
  
});

router.get("/side-page1", (req,res,next) => {
  axios.get("https://athletes-json.herokuapp.com/athletes?ID=453")
  
  .then((athlete) => {
    const athleteName = athlete.data[0].Name;
    const ss = athleteName.replace(/\s+/g, '+');
    
    console.log('ss :', ss);
    
    axios.get(`https://www.mediawiki.org/w/api.php?action=query&list=allimages&aifrom=${ss}&format=json`)
    .then((images) => {
      
     console.log('images.data.query.allimages :', images.data.query.allimages);
     
      res.render('side-page1',{images: images.data.query.allimages[0].url , athlete:athlete.data[0]});
    })
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
