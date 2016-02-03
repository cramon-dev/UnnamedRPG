var Player = require('../models/characters/player.js');
var Character = require('../models/characters/character.js');

exports.createPlayer = function(test) {
	test.expect(4); // expect {num} assertions

	var stats = {
		name: 'Christian',
		str: 10,
		fin: 10,
		intl: 10,
		aff: 10,
		wil: 10,
		agl: 10,
		chr: 10
	};

	var player = new Player();
	player.initPlayer(stats);

	// assert stuff here
	test.ok(player, 'Newly created player is not null');
	test.ok((player.name == 'Christian'), 'Player has name \'Christian\'');
	test.ok((player.health === 1), 'Newly created player has 1 health');
	test.ok((player.isPrototypeOf(Character), 'Player is prototype of Character'));

	test.done(); // done with assertions
};