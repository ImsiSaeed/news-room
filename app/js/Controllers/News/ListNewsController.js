(function () {
	var Controller = function ($location, NewsService) {
		var ctrl = this;

		ctrl.news = NewsService.getAllArticles();

		ctrl.openNews = function (article) {
			$location.path('/news/' + article.id);
		}

		ctrl.newArticle = function () {
			$location.path('/news/create');
		}
	}

	angular.module('NewsRoom').controller('ListNewsController', Controller);
})();