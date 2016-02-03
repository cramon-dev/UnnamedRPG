function Armor(armor) {
	this.armorType = armor.armorType;
	this.defense = armor.defense;
}

Armor.prototype = new Item();
Armor.prototype.constructor = Armor;

Armor.prototype.getArmorType = function() {
	return this.armorType;
};

Armor.prototype.getDefense = function() {
	return this.defense;
};