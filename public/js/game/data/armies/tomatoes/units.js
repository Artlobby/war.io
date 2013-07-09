gameData.ELEMENTS[gameData.FAMILIES.unit][gameData.RACES.tomatoes.id] = {
	builder: {
		name: 'Builder',
		tooltip: 'Builder (B)',
		r: 0,
		t: 0,
		shape: [[1]],
		speed: 1,
		isBuilder: true,
		buttons: [gameData.BUTTONS.build],
		timeConstruction: 10,
		l: 40,
		attackSpeed: 1,
		attack: 5, 
		defense: 0,
		weaponType: fightLogic.WEAPON_TYPES.normal,
		armorType: fightLogic.ARMOR_TYPES.unarmored,
		gatheringSpeed: 1,
		maxGathering: 10,
		pop: 1,
		needs: [{t: gameData.RESOURCES.water.id, value: 50}],
		g: 'tomato_builder',
		gui: 'ic_tomato_builder.png',
		height: 6,
		range: 1,
		vision: 12,
		lifeBarWidth: 8
	},
	baseUnit1: {
		name: 'Gunner',
		tooltip: 'Gunner (D)',
		r: 0,
		t: 1,
		shape: [[1]],
		speed: 1,
		isBuilder: false,
		buttons: [],
		timeConstruction: 15,
		l: 80,
		attackSpeed: 1,
		attack: 10, 
		defense: 1,
		weaponType: fightLogic.WEAPON_TYPES.normal,
		armorType: fightLogic.ARMOR_TYPES.medium,
		pop: 1,
		needs: [{t: gameData.RESOURCES.water.id, value: 60}],
		g: 'tomato_gunner',
		gui: 'ic_tomato_gunner.png',
		height: 6,
		range: 1,
		vision: 12,
		lifeBarWidth: 8
	},
	baseUnit2: {
		name: 'Tom Rambo',
		tooltip: 'Tom Rambo (M)',
		r: 0,
		t: 1,
		shape: [[1]],
		speed: 1,
		isBuilder: false,
		buttons: [],
		timeConstruction: 15,
		l: 80,
		attackSpeed: 1,
		attack: 10, 
		defense: 1,
		weaponType: fightLogic.WEAPON_TYPES.normal,
		armorType: fightLogic.ARMOR_TYPES.medium,
		pop: 1,
		needs: [{t: gameData.RESOURCES.water.id, value: 60}],
		g: 'tomato_rambo',
		gui: 'ic_rambo.png',
		height: 6,
		range: 1,
		vision: 12,
		lifeBarWidth: 8
	},
	baseUnit3: {
		name: 'Minigun',
		tooltip: 'Minigun (N)',
		r: 0,
		t: 1,
		shape: [[1]],
		speed: 1,
		isBuilder: false,
		buttons: [],
		timeConstruction: 15,
		l: 80,
		attackSpeed: 1,
		attack: 10, 
		defense: 1,
		weaponType: fightLogic.WEAPON_TYPES.normal,
		armorType: fightLogic.ARMOR_TYPES.medium,
		pop: 1,
		needs: [{t: gameData.RESOURCES.water.id, value: 60}],
		g: 'tomato_minigun',
		gui: 'ic_tomato_minigun.png',
		height: 6,
		range: 1,
		vision: 12,
		lifeBarWidth: 8
	},
	spceialUnit1: {
		name: 'Boomer',
		tooltip: 'Boomer (P)',
		r: 0,
		t: 1,
		shape: [[1]],
		speed: 1,
		isBuilder: false,
		buttons: [],
		timeConstruction: 15,
		l: 80,
		attackSpeed: 1,
		attack: 10, 
		defense: 1,
		weaponType: fightLogic.WEAPON_TYPES.normal,
		armorType: fightLogic.ARMOR_TYPES.medium,
		pop: 1,
		needs: [{t: gameData.RESOURCES.water.id, value: 60}],
		g: 'tomato_boomer',
		gui: 'ic_tomato_boomer.png',
		height: 6,
		range: 1,
		vision: 12,
		lifeBarWidth: 8
	}
};