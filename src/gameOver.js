SpaceWar.GameOver = function (game) {

};
 
SpaceWar.GameOver.prototype = {
  	create: function(){
	    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
	    var gameOverTitle = this.game.add.text(this.game.world.centerX, this.game.world.centerY -75, "GAME OVER", style);
	    gameOverTitle.anchor.set(0.5);

		var playButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},

	playTheGame: function(){
		this.game.state.start("Game");
	}
};