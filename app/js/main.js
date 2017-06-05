// Namespace
var BREI = {};

(function (window) {

	'use strict';

	BREI.main = {

		init: function () {
			console.log('Initialized...');
			console.log('Hello, BarkleyREI!');
		}

	};

}(window.BREI, window));

window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	BREI.main.init();

}, false);