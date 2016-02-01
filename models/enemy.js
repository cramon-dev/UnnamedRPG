function Enemy(name, str, fin, intl, aff, wil, agl, chr) {
	this.name = '';
	this.isDowned = false;
	this.strength = str;
	this.finesse = fin;
	this.intellect = intl;
	this.affinity = aff;
	this.will = wil;
	this.agility = agl;
	this.charisma = chr;
}

Enemy.prototype = new Person();

// Enemy inherits from person?