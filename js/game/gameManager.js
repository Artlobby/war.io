var gameManager = {};


/**
*	
*/
gameManager.iterate = 0;


/**
*	Handles the entire game loop.
*/
gameManager.updateGame = function () {
	this.iterate = (this.iterate > 1000 ? 0 : this.iterate + 1);
	if(this.iterate % 2 == 0) {
		gameLogic.updateGameLogic();
	}
	gameSurface.updateGameWindow();
	gameSurface.draw();
}


/**
* Sets up a new game and launch it.
*/
gameManager.createNewGame = function(map, players) {
	mapLogic.createRandomMap (map, players);
	gameSurface.init();
	gameThread.startGame();
}


/**
*	Returns a new player.
*/
gameManager.createPlayer = function (race, owner, status, resources) {

}

//start game
//TODO : remove and handle the game creation in a correct way
gameManager.myArmy = 0;
gameManager.players = [
	{race : 0, owner : 0, status: [gameData.STATUSES.me, gameData.STATUSES.neutral], resources : [100, 200, 100, 100], population : {max : 8, current : 3}}, 
	{race : 0, owner : 1, status: [gameData.STATUSES.enemy, gameData.STATUSES.me], resources : [0, 0, 0, 0], population : {max : 8, current : 3}}, 
];
gameManager.createNewGame(gameData.RANDOM_MAPS.small, gameManager.players);
