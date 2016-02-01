this.Monster = new Enemy();

function Monster () {
	this.name = '';
	this.strength = 0;
	this.finessse = 0;
	this.intellect = 0;
	this.affinity = 0;
	this.will = 0;
	this.agility = 0;
	this.charisma = 0;
	this.health = ((this.will * 1.5) * 10) || (100));
}

Monster.prototype.getHealth = function() {
	return this.health;
}

Monster.prototype.getStats = function() {
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
Monster.prototype = Ememy();