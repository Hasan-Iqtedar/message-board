var express = require('express');
var router = express.Router();

let messages = [
  {
    text: 'Hi there',
    user: 'Hasan',
    date: new Date(),
  },
  {
    text: 'Hello World',
    user: 'Ali',
    date: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

module.exports = router;
