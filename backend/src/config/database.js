const mongoose = require('mongoose')
mongoose.Promisse = global.Promise // remove warning message
module.exports = mongoose.connect('mongodb://localhost/todo')