wacc2014Services.factory('Message', function($resource){
    return $resource('api/messages/:messageId', {messageId: '@messageId'});
});