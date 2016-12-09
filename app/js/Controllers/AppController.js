(function () {
	var Controller = function ($location) {
		var ctrl = this;
		ctrl.currentPage = "Home";

		ctrl.navigateToHome = function () {
			$location.path('/');
		}

		ctrl.navigateToNews = function () {
			$location.path('/news');
		}
	}

	angular.module('NewsRoom').controller('AppController', Controller);
})();