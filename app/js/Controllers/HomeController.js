(function () {
	var Controller = function (NewsService, $location) {
		var ctrl = this;

		ctrl.topArticles = NewsService.getTopArticles();

		ctrl.openNews = function (article) {
			$location.path('/news/' + article.id);
		}
	}

	angular.module('NewsRoom').controller('HomeController', Controller);
})();