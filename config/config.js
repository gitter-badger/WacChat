var username = 'wacc2014';
var password = 'very-secure-password';

module.exports = {
  db: process.env.MONGOHQ_URL || 'mongodb://'+username+':'+password+'@localhost:10082'
};