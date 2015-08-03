SpaceWar.Game = function (game) {
};

SpaceWar.Game.prototype = {
	create: function(){
		/*
		 * Debug
		 */
		console.log('Start Game...');
		console.log('X : ' + this.game.world.width.toString());
		console.log('Y : ' + this.game.world.height.toString());
		/* ------------------------------------------------------------ */


		//Display background, logo, button(s), etc.
    	var background = this.game.add.sprite(0, 0, 'background');
		background.width = this.game.world.width;
		background.height = this.game.world.height;

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

	    this.asteorids = this.add.group();
	    this.asteorids.enableBody = true;
	    
		var asteroidLoop = this.game.time.events.loop(Phaser.Timer.SECOND * 0.1, this.createAsteorid, this);
	},

	update: function(){

	},
	
	/*
	 * Generates & create a random asteroid types
	 */
	createAsteorid: function(){
		var type = this.game.rnd.integerInRange(1, 4);
		//console.log('Asteorid type number : ' + type.toString());
		if(type != null){
			 var asteorid = this.add.sprite(this.game.world.randomX -230, this.rndPositionY(), 'asteorid0' + type, 0, this.asteorids);
		     asteorid.body.gravity.y = this.rndGravity();
		     asteorid.checkWorldBounds = true;
		     asteorid.outOfBoundsKill = false;
		     asteorid.events.onEnterBounds.add(this.killOnOutOfBounds, this);
		}
	},

	/*
	 * Set the value of "outOfBoundsKill" to true on a sprite when it is called
	 */
	killOnOutOfBounds: function(sprite)
    	{
        	sprite.outOfBoundsKill = true;
    	},

	/*
	 * Generates a random position (Y) between -150 and -400 (for asteorids)
	 */
	rndPositionY: function(){
		return this.game.rnd.integerInRange(-150, -400);
	},

	/*
	 * Generates a random (int) between 100 and 350 for gravity asteorid
	 */
	rndGravity: function(){
		return this.game.rnd.integerInRange(100, 350);
	},

	/*
	 * Called when the player loose the game
	 */
	gameOver: function(){
		this.state.start('GameOver');
	}
};
