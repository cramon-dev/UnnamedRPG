function Player(name, str, fin, intl, aff, wil, agl, chr) {
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

Player.prototype.getHealth = function() {
	return this.health;
}

Player.prototype.isDowned = function() {
	return this.isDowned;
}

Player.prototype.getStats = function() {
	return {
		strength: this.strength,
		finesse: this.finesse,
		intellect: this.intellect,
		affinity: this.affinity,
		will: this.will,
		agility: this.agility,
		charisma: this.charisma
	}
}

Player.prototype.levelUp = function(stats) {
	this.strength += stats.strength;
	this.finesse += stats.finesse;
	this.intellect += stats.intellect;
	this.affinity += stats.affinity;
	this.will += stats.will;
	this.agility += stats.agility;
	this.charisma += stats.charisma;
}

// Health: If this runs out, the player will be knocked out and unable to take action. If knocked out, the player regains health in the form of unconscious health.

// Unconscious Health: If this runs out, the player will die. Unconscious health is used in place of normal health when a player is knocked out of a battle. The player can still be hurt if knocked out, and eventually killed.

// Strength: Affects the damage of physical abilities and their critical damage multiplier.

// Finesse: Affects the effectiveness of physical abilities and/or their critical chance.

// Intellect: Affects the damage of magical abilities and their critical damage multiplier.

// Affinity: Affects the effectiveness of magical abilities and/or their critical chance.

// Will: Affects health/unconscious health. With a high enough will stat, the player can potentially survive and stay conscious after devastating or mortal wounds.

// Agility: Affects how nimble the player is. Increases their chance to take the first turn in combat as well as dodge or parry attacks.

// Charisma: Affects conversations.