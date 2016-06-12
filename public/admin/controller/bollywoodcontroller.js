 app.controller('bollywood', ['MyService','MyServices','$q','$rootScope','$scope', '$http', function (MyService,MyServices,$q,$rootScope,$scope,$http ) {
 	// $rootScope.pmsg ="Initial parent Message";
 	// $scope.cmsg = "Initial child Message";
 	// $rootScope.counter = -1;
 	MyService.sayHello();
 	MyServices.sayHello();
 	$scope.add =function(num){
       var q = $q.defer();
       if(angular.isNumber(num)){
      	 	q.resolve(num+1);
       }
       else{
       		q.reject('NaN');
       }
       return q.promise
 	}
	$scope.value ="1";
 	$scope.pr= $scope.add($scope.value);
 	$scope.pr.then(function(res){return $scope.add(res);
 	}).then(function(res){$scope.value =res;},
 	function(err){$scope.value= err;}
 	)


            $http.get("admin/models/bollywoodpage.php")
                .success(function(data){
                	console.log(data);
                    $scope.data = data;
                })
                .error(function() {
                    $scope.data = "error in fetching data";
                });
      //           $scope.$watch('pmsg',function(oldVal,newVal){
 					// 	$rootScope.counter++;
 					// })
      //           setTimeout(function(){
      //           	$rootScope.pmsg ="New parent Message";
 					// $scope.cmsg = "New child Message";
 					// $scope.$apply();
 					
      //           },2000);
        }]);

app.service('MyService', function () {
  this.sayHello = function () {
    console.log('hello');
  };
})
app.factory('MyServices', function () {
  return {
    sayHello: function () {
      console.log('World');
    }
  }
});
