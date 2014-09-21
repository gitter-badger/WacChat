var express = require('express');
var router = express.Router();

/* GET home page. */
var messages = [
  {
    name:"Frank",
    content:"Test message by frank"
  },
  {
    name:"Frank",
    content:"Test message by frank"
  },
  {
    name:"Alexander",
    content:"Test message by Alexander"
  },
  {
    name:"Hessel",
    content:"Test message by Hessel"
  },
  {
    name:"Brian",
    content:"Test message by Brian"
  }
];


router.get('/', function(req, res) {
  res.send(messages)
});

router.get('/:messageId', function(req, res) {
  res.send(messages[req.params.messageId])
});

router.post('/', function(req, res) {
  messages.push(req.body)
  res.send(201)
});

module.exports = router;
