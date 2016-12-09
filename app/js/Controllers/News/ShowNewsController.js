(function () {
	var Controller = function ($location, $routeParams, NewsService) {
		var ctrl = this;

		ctrl.article = NewsService.getArticle($routeParams.id);

		ctrl.editArticle = function (id) {
			$location.path('/news/' + id + '/edit');
		}
	}

	angular.module('NewsRoom').controller('ShowNewsController', Controller);
})();