wacc2014App.controller('ChatController', function($scope, $http, $timeout, Message) {
  $scope.message = {};
  $http({method:'GET', url: 'api'}).success(function(data){
    $scope.chat_content = data;
  });
  
  $scope.send_message = function() {
    console.log($scope.message);
    Message.save($scope.message);
    $scope.message = {name: $scope.message.name};
  }
  
  refresh();
  function refresh() {
    $scope.messages = Message.query();
    $timeout(function(){
      refresh();
    }, 2000);
  }
  
});