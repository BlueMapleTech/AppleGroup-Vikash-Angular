(function() {
	var app = angular.module("AJSExample");

	app.controller("ListOfUserController", [ '$log', '$scope', '$rootScope','$http',
			'$location', function($log, $scope, $rootScope, $http, $location) {
				$log.debug("list Controller Initialized.!");

				var self = $scope;
				self.init = function(){
					$log.debug("list user method has been called!");
					self.find_all_user();
				}
				
				self.update = function(id){
					$location.url("/list/"+id);
				};

				self.find_all_user = function() {
					$log.debug("list controller has been called!");
					$http({
						method : "POST",
						url : "http://localhost:8081/AngularJSExample/signup/find_all_user",
						headers:{
							Accept : 'application/json'
						}
					}).success(function(response) {
						$log.debug("list:",response);
						self.users = angular.fromJson(response);
					}).error(function(response){
						$log.debug("Unable to create user,please try again!");
					});
				};
				
				
				/*self.user={
						userId:"",
					
					};

				self.updateUser = function(userId) {
					$log.debug("Redirecting to signup page.!");
					$location.url("/list/userId={{userId}}");
				
				};


				
				self.updateUser = function(userId) {
					$log.debug("detail controller has been called!");
					$http({
						method : "POST",
						url : "http://localhost:8081/AngularJSExample/signup/updateUser"+ '?userId=' + userId,
						headers:{
							Accept : 'application/json'
						}
					}).success(function(response) {
						$log.debug("deleted sucessfully");
						$location.url("/listofuser");
					}).error(function(response){
						$log.debug("Unable to delete user,please try again!");
					});
				}

				
*/				
				
				self.deleteUser = function(userId) {
					$log.debug("delete controller has been called!");
					$http({
						method : "POST",
						url : "http://localhost:8081/AngularJSExample/signup/deleteUser"+ '?userId=' + userId,
						headers:{
							Accept : 'application/json'
						}
					}).success(function(response) {
						$location.url("/listofusers/aaa");
						$log.debug("deleted sucessfully");
						
					}).error(function(response){
						$log.debug("Unable to delete user,please try again!");
					});
				}
				self.init();	
	} ]);
})();
