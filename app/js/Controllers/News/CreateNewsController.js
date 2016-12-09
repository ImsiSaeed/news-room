(function () {
	var Controller = function ($location, $routeParams, NewsService) {
		var ctrl = this;
		ctrl.isCreating = true;

		ctrl.article = {};

		ctrl.save = function (article) {
			ctrl.article = NewsService.saveArticle(article);
			$location.path('/news/' + article.id);
		}
	}

	angular.module('NewsRoom').controller('CreateNewsController', Controller);
})();