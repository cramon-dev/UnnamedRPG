function NPC(stats) {
	this.name = stats.name;
	this.isDowned = false;
	this.statusEffects = this.statusEffects;
	this.health = 1; // Come up with some formula that determines base health from stats
	this.strength = stats.str;
	this.finesse = stats.fin;
	this.intellect = stats.intl;
	this.affinity = stats.aff;
	this.will = stats.wil;
	this.agility = stats.agl;
	this.charisma = stats.chr;
}

NPC.prototype = new Character();
NPC.prototype.constructor = NPC;

module.exports = NPC;