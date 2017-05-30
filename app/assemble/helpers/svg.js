module.exports = {
	svg: function (name) {
		return new Handlebars.SafeString("<svg class='icon icon-" + name + "'><use xlink:href='#icon-" + name + "'></use></svg>");
	}
}
