(function() {
	var app = angular.module("AJSExample", [ 'ngRoute' ]);

	app.config(function($routeProvider) {
		$routeProvider.when("/login", {
			templateUrl : "app/views/login.html"
		}).when("/signup", {
			templateUrl : "app/views/signup.html"
		}).when("/listofusers", {
			templateUrl : "app/views/listofuser.html"
		}).when("/list/:userId", {
			templateUrl : "app/views/list.html"
		}).when("/listofusers/aaa", {
			templateUrl : "app/views/listofuser.html"
		})
		
		.otherwise({
			redirectTo : "/login"
		});
	});

	app.run(function($log) {
		$log.debug("Started running.!");
	})

})();