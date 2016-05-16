var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var taskSchema = new Schema({
  'text' : String,
  'Number': Number
});

module.exports = mongoose.model('Foods', taskSchema);
