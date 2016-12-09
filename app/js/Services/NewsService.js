(function () {
	"use strict"

	var NewsService = function ($filter) {
		var news = [
			{
				id: 1,
				title: "Imran saved the day!",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, placeat. Tenetur numquam aut quos voluptas blanditiis, voluptatibus inventore sit placeat. Illum dignissimos iusto totam ducimus enim? Esse mollitia, reprehenderit quae."
			},
			{
				id: 3,
				title: "Hussain Nizaam returns back to Male'!",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus quia ipsa incidunt illum, eligendi, in assumenda vel, sed a tempore quasi tenetur suscipit consequuntur ab accusantium! Reprehenderit cupiditate, recusandae."
			},
			{
				id: 2,
				title: "Thoha fell asleep on duty!",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur possimus dolore amet iure illo ad, odio dolorem eos eum repellendus culpa dolorum libero architecto facilis adipisci accusantium beatae natus. Odit!"
			}
		];

		return {
			getTopArticles: function () {
				return news.slice(0, 2);
			},
			
			getAllArticles: function () {
				return news;
			},

			getArticle: function (id) {
				return $filter('filter')(news, {id: id})[0];
			},

			saveArticle: function (article) {
				var id = Math.max.apply(Math,news.map(function(object){
					return object.id;
				}));

				article.id = id + 1;

				news.push(article);

				return article;
			}
		}
	}

	angular.module('NewsRoom').service('NewsService', NewsService);
})();