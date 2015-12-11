(function() {
	var app = angular.module("AJSExample");

	app.controller("userDetailController", [ '$log', '$scope', '$rootScope','$http',
			'$location','$routeParams', function($log, $scope, $rootScope, $http, $location,$routeParams) {
		
		// var id = $routeParams.userId;
			var self = $scope;
			self.init = function(){
				$log.debug("list user method has been called!", $routeParams.userId);
				self.findUser($routeParams.userId);
			}
		
			self.userAuthentication={
				userId:"id"
				
			};

			self.findUser = function(id) {
				$http({
					url : "http://localhost:8081/AngularJSExample/signup/updateUser"+'?userId='+id,
					method:"GET"
				}).success(function(response) {
					
					$log.debug("list:",response);
					self.user = angular.fromJson(response);
					}).error(function(response){
					$log.debug("Unable to create user,please try again!");
				});
			}
                    self.init();
    				self.user = {
    					firstName : "",
    					lastName : "",
    					emailAddress : "",
    					password : "",
    					confirmPassword : "",
    					mobileNumber : "",
    					address : ""
    				};
        				self.updateUserDetail = function() {
        					$log.debug("update method initiated!");

        					$http({
        						method:"POST",
        						url:"http://localhost:8081/AngularJSExample/signup/updateUserDetail",
        						data:self.user,
        						headers:{
        							Accept:'application/json'
        						}
        					}).success(function(response){
        						$log.log("updated user:",self.user);
        						$log.log("User has been created successfully!");
        						$location.url("/listofusers");
        					}).error(function(response){
        						$log.log("Unable to create user,please try again!");
        					});
        					
        				}

			} ]);
})();