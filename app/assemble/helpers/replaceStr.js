module.exports = {
	replaceStr: function (haystack, needle, replacement) {

		if (haystack && needle) {
			return haystack.replace(needle, replacement);
		} else {
			return '';
		}
	}
}
