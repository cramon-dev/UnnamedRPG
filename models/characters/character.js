function Character() {
	this.name = '';
	this.isDowned = false;
	this.statusEffects = [];
	this.health = 1; // Come up with some formula that determines base health from stats
	this.strength = 0;
	this.finesse = 0;
	this.intellect = 0;
	this.affinity = 0;
	this.will = 0;
	this.agility = 0;
	this.charisma = 0;
}

Character.prototype = {
	getStatus: function() {
		return { health: this.health, isDowned: this.isDowned, statusEffects: this.statusEffects };
	},

	getHealth: function() {
		return this.health;
	},

	getStats: function() {
		return {
			health: this.health,
			strength: this.strength,
			finesse: this.finesse,
			intellect: this.intellect,
			affinity: this.affinity,
			will: this.will,
			agility: this.agility,
			charisma: this.charisma
		};
	}
};

module.exports = Character;