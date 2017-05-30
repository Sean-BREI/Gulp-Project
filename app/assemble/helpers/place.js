module.exports = {
	place: function (w, h, text) {
		function isValid(str) {
			return typeof str != 'undefined' && str != '' && typeof str.data == 'undefined';
		}

		var width = (isValid(w)) ? w : '300';
		var height = (isValid(h)) ? 'x' + h : '';
		var text = (isValid(text)) ? '?text=' + encodeURI(text) : '';

		var url = 'http://placehold.it/' + width + height + text;

		return new Handlebars.SafeString("<img src='" + url + "' alt='Placeholder Image' />")
	}
}
