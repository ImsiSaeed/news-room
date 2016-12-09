(function () {
	var Controller = function (NewsService) {
		var ctrl = this;

		ctrl.topArticles = NewsService.getTopArticles();
	}

	angular.module('NewsRoom').controller('HomeController', Controller);
})();