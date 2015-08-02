SpaceWar.MainMenu = function (game) {
};

SpaceWar.MainMenu.prototype = {
    create: function () {
    	//Display background, logo, button(s), etc.
    	var background = this.game.add.sprite(0, 0, 'background');
    	//fix size of background
		background.width = this.game.world.width;
		background.height = this.game.world.height;

		var logo = this.game.add.sprite(this.game.world.centerX - 390, 120, 'logo');
		var playButton = this.game.add.button(this.game.world.centerX - 200, 400, "play", this.runGame, this, 1, 0);
    },
    
    runGame : function () {
    	this.game.state.start("Game");
    }
};