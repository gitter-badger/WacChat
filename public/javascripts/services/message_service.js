wacc2014Services.factory('Message', ['$resource',
  function($resource){
    return $resource('api/messages/:messageId', {}, {
      query: {method:'GET', isArray:true}
  });
}]);