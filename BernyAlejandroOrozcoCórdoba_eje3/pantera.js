var game= new Phaser.Game(150,350,Phaser.CANVAS, 'sprite',transparent=true); //DEfino el tamaño de la animación

var Pantera={
	preload:function(){
		var me= this;
		me.load.spritesheet('pantera', 'img/pantera.png',46,69); //importo el sprite de la pantera y sus dimensiones de animación
		me.load.image("fondo", "img/fondoP.png"); //importo la imagen de fondo de la pantera
	},
	create: function(){
		var me=this;
		me.game.add.tileSprite(0, 0, 150, 350, "fondo");	//Defino las dimensiones de la imagen de fondo
		me.pantera=me.game.add.sprite(10,150,'pantera');	//Defino la posición de la pantera en el fondo
		me.pantera.scale.x=3.3;//Escalo el tamaño de la pantera en x
		me.pantera.scale.y=3.3;//Escalo el tamaño de la pantera en y
		me.pantera.animations.add('estar', [0,1,2,3,4,5,6],3,true); //Defino la animación "estar" del 0 al 6 y con vel. de reproducción 3
		me.pantera.animations.add('rugir',[7,8,9,10],6,true); //Esta es otra animación que al final decidí no usar, pero esta implementada
		me.pantera.animations.play('estar'); //Hago que empiece la animación "estar" desde el principio
	},
}
game.state.add("activo",Pantera); //Pongo como activo el estado de Pantera
game.state.start("activo"); //Inicio Pantera