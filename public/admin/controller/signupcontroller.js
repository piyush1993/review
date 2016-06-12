app.controller('signupcontroller',function($scope,$http){
$scope.user={};
$scope.signupform= function(){
	$http.post("admin/models/signup.php",{'fstname': $scope.user.firstname, 'lstname': $scope.user.lasttname,
		'email': $scope.user.email, 'password': $scope.user.password, 'mobile': $scope.user.number})
        .success(function(data, status, headers, config){
        	$scope.successMsg= "account successfully created";
            $scope.user={};
        })
        .error(function(data, status, headers, config) {
        $scope.errorMsg = 'Unable to submit form';
      });
}


});