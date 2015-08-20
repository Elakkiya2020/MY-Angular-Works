var app = angular.module('plunker', ['ngAnimate', 'ui.bootstrap']);

app.controller('MainCtrl', function($scope) {
  $scope.contacts = []; 
  $scope.curItem=[{id:"1",items:"Apple"}, {id:"2",items:"Orange"}, {id:"3",items:"Banana"}, {id:"4",items:"Apricot"}, {id:"5",items:"Asparagus"}]; 
  
  $scope.save=function(i){
    if ($scope.contacts.indexOf(i) <=-1){
      $scope.contacts.push(i);

    }
    
  };
    $scope.groups = [
    {
      title: "Selected Option: ",
      content: "Dynamic Group Body - 1",
      no: 1
    }
                    ];
  
});
