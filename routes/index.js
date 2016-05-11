var express = require('express');
var router = express.Router();
var students = {};
//var counter = 1;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Check Ins',
    students: students });
});

router.post('/students', function(req, res, next) {
  //tasks.push(req.body.task);
  
    if(req.body.student == ''){
      return false;
    }
    else if(students[req.body.student] == null){
      //var counter = counter + 1;
      students[req.body.student] = 1;
    }
    else if(students[req.body.student] !== null){
      var counter = students[req.body.student];
      students[req.body.student] = counter + 1;
    }


  //students[req.body.student] = 1;
  console.log(students);
  res.redirect('/');
});

module.exports = router;
