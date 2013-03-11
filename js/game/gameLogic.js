var gameLogic = {};


/**
*	Manages the current zoom of the game window
*/
gameLogic.PIXEL_BY_NODE = 15;
gameLogic.ZOOM_MAX = 30;
gameLogic.ZOOM_MIN = 10;
gameLogic.zoom = gameLogic.PIXEL_BY_NODE;


/**
*	Main variable used during the game.
*  	It contains all the maps' elements, units and buildings.
*/
gameLogic.gameElements = [];


/**
* 	Helpers to improve performance when searching elements.
*/
gameLogic.terrainElements = [];
gameLogic.buildingElements = [];


/**
*	Contains the current selected elements of gameElements.
*/
gameLogic.selected = [];


/**
*	Contains the building that the user wants to construct.
*/
gameLogic.building = null;


/**
*	Contains the coordinates of the selection rectangle.
*/
gameLogic.selectionRectangle = [];


/**
*	Tells which tile is occupied and which tile is free.
*/
gameLogic.grid = [];


/**
*	Updates all the data related to the game logic itself : positions, life, ...
* 	It also checks if the game is ending.
*/
gameLogic.updateGameLogic = function() {
	this.updateToolbar();
	this.updateGameWindow();
	this.resolveActions();
	this.updateMoves();
	this.removeDeads();
	this.updateGrid();
	this.checkGameOver();
	this.updateBuildings();
	this.updateFogOfWar();
}


/**
*	Updates the zoom of the window
*/
gameLogic.updateGameWindow = function () {
	this.PIXEL_BY_NODE = this.zoom;
}


/**
*	Updates the grid used for A*.
*/
gameLogic.updateGrid = function () {
	this.grid = tools.cloneObject(mapLogic.staticGrid);
	for(var n in this.gameElements) {
		var element  = this.gameElements[n];
		for(var i in element.shape) {
			var row = element.shape[i];
			for(var j in row) {
				var part = row[j];
				if(part > 0) {
					var position = tools.getPartPosition(element, i, j);
					this.grid[position.x][position.y].isWall = true;
				}
			}
		}
	}
}


/**
*	Updates the toolbar.
*/
gameLogic.updateToolbar = function () { 
	GUI.updateToolbar();
}


/**
*	Updates moving units' positions.
*/
gameLogic.updateMoves = function () {
	for(var i in this.gameElements) {
		var element  = this.gameElements[i];
		if(element.moveTo != null && element.moveTo.x != null) {
			moveLogic.moveElement(element);
		}
	}
}


/**
*	Depending on the action of the unit, change the destination,
*	and if close enough, resolve the action (build, fight...).
*/
gameLogic.resolveActions = function () {
	if(gameManager.iterate % 5 == 0) {
		for (var i in gameLogic.gameElements) {
			var element = gameLogic.gameElements[i];
			if (element.action != null) {
				var distance = tools.getElementsDistance(element, element.action);
				//dispatch orders
				if (distance <= 2) {
					//close enough
					if (element.isBuilder && element.action.family == gameData.FAMILIES.building
						&& fightLogic.isAlly(element.action)) {
						if(element.action.constructionProgress < 100) {
							//build
							actions.doTheBuild(element, element.action);	
						} else {
							if(element.gathering != null) {
								//come back with some resources
								buildLogic.getBackResources(element);
							}
							//TODO : repair
						}
					} else if (element.isBuilder && element.action.family == gameData.FAMILIES.terrain) {
						//gathering resources
						actions.doTheGathering(element, element.action);
					} else if (!fightLogic.isAlly(element.action)) {
						//attack
						actions.doTheAttack(element, element.action);
					}
				} else {
					//move closer in order to do the action
					var closest = tools.getClosestPart(element, element.action);
					element.moveTo = {x : closest.x, y : closest.y};
				}

			}
		}
	}
}


/**
*	Removes dead units and destroyed buildings from gameElements.	
*/
gameLogic.removeDeads= function () {
	var n = gameLogic.gameElements.length;
	while (n--) {
		var element = gameLogic.gameElements[n]; 
		if (element.life <= 0 || element.resourceAmount == 0) {
			if (element.family == gameData.FAMILIES.terrain) {
			} else if (element.family == gameData.FAMILIES.building) {
				buildLogic.removeBuilding(element);
			} else if (element.family == gameData.FAMILIES.unit) {
				buildLogic.removeUnit(element);
			}
			fightLogic.removeElement(n);

			//remove from selection
			for(var i in gameLogic.selected) {
				if (gameLogic.selected[i].id == element.id) {
					gameLogic.selected.splice(i, 1);
					break;
				}
			}
		}
	}

	mapLogic.removeTerrain();
}


/**
*	Stops the game if the winning conditions are reached.
*/
gameLogic.checkGameOver = function () {
}


/**
*	Updates buildings constructions, units and research.
*/
gameLogic.updateBuildings = function () {
	for (var i in gameLogic.gameElements) {
		if (gameLogic.gameElements[i].family == gameData.FAMILIES.building) {
			var building = gameLogic.gameElements[i];
			if (building.queue.length > 0) {
				buildLogic.updateQueueProgress(building);
			}
			//TODO : research

		}
	}
}


/**
*	Returns the position of the specified element in the gameElements array.
*/
gameLogic.getPositionInGameElements = function (id) {
	for (var i in gameLogic.gameElements) {
		if(gameLogic.gameElements[i].id == id) {
			return i;
		}
	}
	return -1;
}


/**
*	Updates the fog of war grid.
*/
gameLogic.updateFogOfWar = function () {
	
}