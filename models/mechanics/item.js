function Item(item) {
	this.id = item.id;
	this.name = item.name;
}

Item.prototype = {
	getId: function() {
		return this.id;
	},

	getName: function() {
		return this.name;
	}
}