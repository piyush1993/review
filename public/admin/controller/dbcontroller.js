 app.controller('dbcontroller', ['$scope','$http','myser' ,function($scope, $http, myser) {
 	
 	$http.get("admin/models/retrieve.php")
 	.success(function(data){
 		console.log(data);
 		$scope.data = data;
 	})
 	.error(function() {
 		$scope.data = "error in fetching data";
 	});
 	$scope.open=function(msg){
 	myser.add();
 	}
 }]);

 app.service('myser',[function($modal) {
       return{
    add: function() {
   
      var modalInstance = $modal.open({
          templateUrl: 'templates/team.html'
          
        });
    }
};
  }]);


 