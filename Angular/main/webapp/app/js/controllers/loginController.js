(function() {
	var app = angular.module("AJSExample");

	app.controller("loginController", [ '$log', '$scope', '$rootScope','$http',
			'$location', function($log, $scope, $rootScope, $http, $location) {
				$log.debug("Login Controller Initialized.!");

				var self = $scope;
				
				self.userAuthentication={
					emailAddress:"",
					password:""
				};

				self.performLogin = function() {
					$log.debug("login controller has been called!");
					if(self.userAuthentication.emailAddress==null||self.userAuthentication.emailAddress=="" || self.userAuthentication.password==null||self.userAuthentication.password==''){
						return;
						
					}
					$http({
						
						method : "POST",
						url : "http://localhost:8081/AngularJSExample/signup/performLogin"+ '?emailAddress=' + self.userAuthentication.emailAddress
						+ '&password='+ self.userAuthentication.password,
						headers:{
							Accept : 'application/json'
						}
					}).success(function(response) {
						$log.debug("login sucess:",response);
						$location.url("/listofusers");
					}).error(function(response){
						$log.debug("Unable to create user,please try again!");
					});
				}

				self.doSignup = function() {
					$log.debug("Redirecting to signup page.!");
					$location.url("/signup");
				};
			    $scope.Items = [{
			        Name: "Item one"
			    }, {
			        Name: "Item two"
			    }, {
			        Name: "Item three"
			    }];
			    
			    
			    $scope.checkAll = function () {
			        if ($scope.selectedAll) {
			            $scope.selectedAll = true;
			        } else {
			            $scope.selectedAll = false;
			        }
			        angular.forEach($scope.Items, function (item) {
			            item.Selected = $scope.selectedAll;
			        });
			    };

			} ]);
})();
