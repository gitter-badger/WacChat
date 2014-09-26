var username = 'wacc2014';
var password = '928e1ac2eb381';

module.exports = {
  db: process.env.MONGOHQ_URL || 'mongodb://'+username+':'+password+'@kahana.mongohq.com:10082/app29963537'
};