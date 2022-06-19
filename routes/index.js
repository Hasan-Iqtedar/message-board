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

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    date: new Date(),
  });

  res.redirect('/');
});

module.exports = router;
