var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer') ; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register' , function(req , res , next) {

  
  res.render('register') ; 

}); 

router.get('/schedule' , function(req , res , next) {
  res.render('schedule') ; 
}); 

router.get('/about' , function(req , res, next) {
  res.render('about') ; 
})

router.post('/submit' , function({body} , res , next) {
  res.render('msg') ; 

  var transporter = nodemailer.createTransport({
    service : 'gmail', 
    auth : {
      user: 'murarkanaman@gmail.com' , 
      pass: 'Naman2005'
    }
}); 

var mailOptions = {
  from: 'murarkanaman@gmail.com' , 
  to : 'murarkanaman@gmail.com' , 
  subject: String(body.name + " has registered") , 
  text : String("Phone number is : " + body.number) 
}; 

transporter.sendMail(mailOptions , function(error , info) {
  if (error) {
    console.log(error) ; 
  }else {
    console.log('Email sent: ' + info.response) ; 
    console.log('working') ; 
  }
})

})
module.exports = router;
