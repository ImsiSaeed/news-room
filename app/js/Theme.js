(function () {
	"use strict"

	angular.module('NewsRoom').config(function($mdThemingProvider) {
		$mdThemingProvider
			.theme('default')
			.primaryPalette('blue')
			.accentPalette('deep-purple')
			.warnPalette('orange')
			.backgroundPalette('grey');

		$mdThemingProvider
			.theme('article')
			.primaryPalette('blue')
			.accentPalette('deep-purple')
			.backgroundPalette('orange');
	});
})();