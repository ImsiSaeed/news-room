(function () {
	var Controller = function ($location, $routeParams, NewsService) {
		var ctrl = this;

		ctrl.article = NewsService.getArticle($routeParams.id);
	}

	angular.module('NewsRoom').controller('EditNewsController', Controller);
})();