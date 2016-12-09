(function () {
	"use strict"

	angular.module('NewsRoom').config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: "home",
				controller: "HomeController as ctrl"
			})
			.when('/404', {
				templateUrl: "404",
				controller: "NotFoundController as ctrl"
			})

			// News
			.when('/news', {
				templateUrl: "news.index",
				controller: "ListNewsController as ctrl"
			})
			.when('/news/create', {
				templateUrl: "news.form",
				controller: "CreateNewsController as ctrl"
			})
			.when('/news/:id', {
				templateUrl: "news.show",
				controller: "ShowNewsController as ctrl"
			})
			.when('/news/:id/edit', {
				templateUrl: "news.form",
				controller: "EditNewsController as ctrl"
			})
			.otherwise('/404');
	})
})();