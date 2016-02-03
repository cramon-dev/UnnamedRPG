function Weapon(weapon) {
	this.weaponType = weapon.weaponType;
	this.strength = weapon.strength;
}

Weapon.prototype = new Item();
Weapon.prototype.constructor = Weapon;

Weapon.prototype.getWeaponType = function() {
	return this.weaponType;
};

Weapon.prototype.getStrength = function() {
	return this.strength;
};