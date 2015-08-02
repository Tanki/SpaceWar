var SpaceWar = {};

SpaceWar.Preloader = function (game) {
};

SpaceWar.Preloader.prototype = {
	preload: function () {
		//preload sprites, sounds, etc.
        this.game.load.image('background', 'assets/img/bg.jpg');
        this.game.load.image('logo', 'assets/img/logo.png');
        this.game.load.image('asteorid01', 'assets/img/asteorid01.png');
        this.game.load.image('asteorid02', 'assets/img/asteorid02.png');
        this.game.load.image('asteorid03', 'assets/img/asteorid03.png');
        this.game.load.image('asteorid04', 'assets/img/asteorid04.png');
        this.game.load.spritesheet('play', 'assets/img/play.png', 366, 92);
    },

    create: function () {
        this.state.start('MainMenu');
    }
};