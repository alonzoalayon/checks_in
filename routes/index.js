var express = require('express');
var router = express.Router();
var TaskModel = require('../models/TaskModel.js');
//var students = {};
//var ing = mongoose.model('Cat', {name: String,  count: number})
var counter = 1;
var task;

/* GET home page. */
router.get('/', function(req, res, next) {
  TaskModel.find(function(err, idx) {
    // since the function is asyncrounous, we have to pass in a callback to
    // be ran when the db query is finished
    res.render('index', {
      title: 'Express',
      foods: idx
    });
  });
});

/* POST Create a task. */
router.post('/foods', function(req, res, next) {
  TaskModel.find({text: req.body.food}, function(error, comida){
    if(error){
      res.json(error);
    }
    else if(req.body.food == ''){
      return false;
    }
    else if(req.body.food !== comida){
      idx = new TaskModel({
            text : req.body.food,
            Number : req.body.quantity
      });
      idx.save(function(error, data){
        if(error){
          res.json(error);
        }
        else{
          //res.json(data);
          res.redirect('/');
        }
      })
    }
  })
  /*if(req.body.food == ''){
    return false;
  }
  else if(req.body.food == TaskModel['text']){
    task = TaskModel({text: '', Number : counter++});
  }
  else if(req.body.food !== TaskModel['text']){
    task = new TaskModel({
          text : req.body.food,
          Number : counter
    });
  }*/

  /*else if{}
  task = new TaskModel({
        text : req.body.food,
        Number : counter
  });*/

  //task.save(function(err, task) {
    // since the function is asyncrounous, we have to pass in a callback to
    // be ran when the db insert is finished
    //res.redirect('/');
  //});
});

/*router.post('/foods', function(req, res, next) {
  var task = new TaskModel({
        text : req.body.food,
        //number: counter
  });
  //tasks.push(req.body.task);
  //Ing.find({req.body.student}, function(err, results){
  //if(results){
    //update the model
  //}
  //else{
    //create new model and save
  //}
//})
    /*if(req.body.food == ''){
      return false;
    }
    else if(foods[req.body.food] == null){
      //var counter = counter + 1;
      foods[req.body.food] = 1;
    }
    else if(foods[req.body.food] !== null){
      var counter = foods[req.body.food];
      foods[req.body.food] = counter + 1;
    }*/


  //students[req.body.student] = 1;
  //console.log(foods);
  //res.redirect('/');
//});

module.exports = router;
