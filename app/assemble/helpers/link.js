module.exports = {
	link: function (link) {
		function isValid(str) {
			return typeof str != 'undefined' && str != '';
		}

		var url = (isValid(link.url)) ? link.url : '#';
		var icon = (isValid(link.icon)) ? '{{svg "' + link.icon + '"}}' : '';
		var title = (isValid(link.title)) ? link.title : '';
		var style = (isValid(link.style)) ? ' class="' + link.style + '"' : '';
		var alt = (isValid(link.alt)) ? ' title="' + link.alt + '"' : ' title="' + title + '"';

		var link = '';

		if (url != '' && title != '') {
			link = '<a href="' + url + '"{0}{1}>{2}' + new Handlebars.SafeString(title) + '</a>';
			link = link.replace('{0}', alt);
			link = link.replace('{1}', style);
			link = link.replace('{2}', Handlebars.compile(icon));
		}

		return new Handlebars.SafeString(link);
	}
}
