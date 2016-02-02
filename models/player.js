function Player(stats) { 
	this.name = stats.name;
	this.isDowned = false;
	this.health = 1; // Come up with some formula that determines base health from stats
	this.strength = stats.str;
	this.finesse = stats.fin;
	this.intellect = stats.intl;
	this.affinity = stats.aff;
	this.will = stats.wil;
	this.agility = stats.agl;
	this.charisma = stats.chr;
}

Player.prototype = new Character();
Player.prototype.constructor = Player;

Player.prototype.getHealth = function() {
	return this.health;
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