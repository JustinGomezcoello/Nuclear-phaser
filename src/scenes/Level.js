// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// dino
		const dino = this.add.image(1150, 467, "dino");
		dino.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 250), Phaser.Geom.Rectangle.Contains);
		dino.visible = false;

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(dino);

		// pushActionScript
		new PushActionScript(onPointerDownScript);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(dino);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// controles
		const controles = this.add.image(1150, 363, "Controles");

		// welcome
		const welcome = this.add.text(1381, 301, "", {});
		welcome.setOrigin(0.5, 0.5);
		welcome.visible = false;
		welcome.text = "Phaser 3 + Phaser Editor 2D";
		welcome.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(welcome);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeScript_1);

		// instrucciones
		const instrucciones = this.add.image(120, 363, "Instrucciones");

		// panel_de_Control
		const panel_de_Control = this.add.image(627, 366, "Panel de Control");

		// apagar
		const apagar = this.add.image(1147, 647, "Apagar");

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(apagar);

		// pushActionScript
		new PushActionScript(onPointerDownScript_1);

		// tiempo
		const tiempo = this.add.image(1146, 74, "Tiempo");

		// boton_mas
		const boton_mas = this.add.image(1089, 389, "boton mas");

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(boton_mas);

		// pushActionScript
		new PushActionScript(onPointerDownScript_2);

		// boton_menos
		const boton_menos = this.add.image(1200, 389, "boton menos");

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(boton_menos);

		// pushActionScript
		new PushActionScript(onPointerDownScript_3);

		// oN
		const oN = this.add.image(1148, 250, "ON");
		oN.scaleX = 3;
		oN.scaleY = 3;

		// oFF
		const oFF = this.add.image(1149, 250, "OFF");
		oFF.scaleX = 3;
		oFF.scaleY = 3;

		// apagar2
		const apagar2 = this.add.image(1146, 645, "Apagar2");

		// agua
		const agua = this.add.image(355, 575, "agua");
		agua.scaleX = 1.6410265604098297;
		agua.scaleY = 0.9074273885789944;

		// agua2
		const agua2 = this.add.image(419, 573, "agua2");
		agua2.scaleX = 1.3418529090086277;
		agua2.scaleY = 0.9074273795636224;

		// agua3
		const agua3 = this.add.image(507, 575, "agua3");
		agua3.scaleX = 1.1629693723836945;
		agua3.scaleY = 0.9952201401882468;
		agua3.setOrigin(0.5119749700787452, 0.5);

		// agua4
		const agua4 = this.add.image(554, 574, "agua4");

		// agua5
		const agua5 = this.add.image(629, 574, "agua5");

		// reactor1
		const reactor1 = this.add.image(508, 324, "reactor1");
		reactor1.visible = false;

		// reactor2
		const reactor2 = this.add.image(656, 321, "reactor2");
		reactor2.visible = false;

		// tV___128
		const tV___128 = this.add.image(643, 360, "TV - 128");
		tV___128.visible = false;

		// perdida
		const perdida = this.add.image(641, 359, "perdida");
		perdida.visible = false;

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "TOP";

		// moveInSceneActionScript (components)
		const moveInSceneActionScriptDurationConfigComp = new DurationConfigComp(moveInSceneActionScript);
		moveInSceneActionScriptDurationConfigComp.duration = 1000;

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 1500;

		this.controles = controles;
		this.welcome = welcome;
		this.instrucciones = instrucciones;
		this.panel_de_Control = panel_de_Control;
		this.apagar = apagar;
		this.tiempo = tiempo;
		this.boton_mas = boton_mas;
		this.boton_menos = boton_menos;
		this.oN = oN;
		this.oFF = oFF;
		this.apagar2 = apagar2;
		this.agua = agua;
		this.agua2 = agua2;
		this.agua3 = agua3;
		this.agua4 = agua4;
		this.agua5 = agua5;
		this.reactor1 = reactor1;
		this.reactor2 = reactor2;
		this.tV___128 = tV___128;
		this.perdida = perdida;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	controles;
	/** @type {Phaser.GameObjects.Text} */
	welcome;
	/** @type {Phaser.GameObjects.Image} */
	instrucciones;
	/** @type {Phaser.GameObjects.Image} */
	panel_de_Control;
	/** @type {Phaser.GameObjects.Image} */
	apagar;
	/** @type {Phaser.GameObjects.Image} */
	tiempo;
	/** @type {Phaser.GameObjects.Image} */
	boton_mas;
	/** @type {Phaser.GameObjects.Image} */
	boton_menos;
	/** @type {Phaser.GameObjects.Image} */
	oN;
	/** @type {Phaser.GameObjects.Image} */
	oFF;
	/** @type {Phaser.GameObjects.Image} */
	apagar2;
	/** @type {Phaser.GameObjects.Image} */
	agua;
	/** @type {Phaser.GameObjects.Image} */
	agua2;
	/** @type {Phaser.GameObjects.Image} */
	agua3;
	/** @type {Phaser.GameObjects.Image} */
	agua4;
	/** @type {Phaser.GameObjects.Image} */
	agua5;
	/** @type {Phaser.GameObjects.Image} */
	reactor1;
	/** @type {Phaser.GameObjects.Image} */
	reactor2;
	/** @type {Phaser.GameObjects.Image} */
	tV___128;
	/** @type {Phaser.GameObjects.Image} */
	perdida;

	/* START-USER-CODE */


	// Write more your code here


	create() {

		this.editorCreate();
		//var, que tiene ámbito de función
		var electricidad=80;
		 var texto1 = this.add.text(900, 160, electricidad+ '%', {
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#ffffff'
    });

    texto1.setOrigin(1, 0); // Establece el origen del texto en la esquina superior derecha
	texto1.setDepth(1); // Establece una profundidad mayor que la de la imagen (por ejemplo, 1)

	var numeroEntero = 50;

	var texto2 = this.add.text(900, 260, numeroEntero + '%', {
		fontFamily: 'Arial',
		fontSize: 50,
		color: '#ffffff'
	});

    texto2.setOrigin(1, 0); // Establece el origen del texto en la esquina superior derecha
	texto2.setDepth(1); // Establece una profundidad mayor que la de la imagen (por ejemplo, 1)

		var temperatura=300;
		var texto3 = this.add.text(900, 360, temperatura + '°', {
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#ffffff'
    });

    texto3.setOrigin(1, 0); // Establece el origen del texto en la esquina superior derecha
	texto3.setDepth(1); // Establece una profundidad mayor que la de la imagen (por ejemplo, 1)


		var porcentaje_agua=50;
		var texto4 = this.add.text(690, 630, porcentaje_agua + '%', {
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#ffffff'
    });

    texto4.setOrigin(1, 0); // Establece el origen del texto en la esquina superior derecha
	texto4.setDepth(1); // Establece una profundidad mayor que la de la imagen (por ejemplo, 1)

	var texto5 = this.add.text(1198, 480, 'Aun no es estable\nEspere....', {
        fontFamily: 'Arial',
        fontSize: 18,
        color: '#ffffff'
    });

    texto5.setOrigin(1, 0); // Establece el origen del texto en la esquina superior derecha
	texto5.setDepth(1); // Establece una profundidad mayor que la de la imagen (por ejemplo, 1)

	var texto6 = this.add.text(1135, 480, 'Estable', {
        fontFamily: 'Arial',
        fontSize: 25,
        color: '#70FE00'
    });

    texto6.setOrigin(1, 0); // Establece el origen del texto en la esquina superior derecha
	texto6.setDepth(1); // Establece una profundidad mayor que la de la imagen (por ejemplo, 1)





		


		this.oFF.visible = false;

		this.oN.setInteractive();
		this.oN.on('pointerdown', function () {
			this.aparecer(electricidad, texto1);
		}, this);

		this.oFF.setInteractive();
		this.oFF.on('pointerdown', function () {
			this.aparecer(electricidad, texto1);
		}, this);
		this.agua5.visible=false;
		this.agua4.visible=false;
		this.agua3.visible=false;
		this.agua2.visible=false;
		this.agua.visible=false;



		// Subir el agua
this.boton_mas.setInteractive();
this.boton_mas.on('pointerdown', function () {
    if (numeroEntero < 100) {
        numeroEntero += 10;
        porcentaje_agua += 10;

        if (numeroEntero > 100) {
            numeroEntero = 100;
            porcentaje_agua = 100;
        }

        texto2.setText(numeroEntero + '%');
        texto4.setText(porcentaje_agua + '%');
    }

    // Verificar si numeroEntero y porcentaje_agua son iguales a 80
    if (numeroEntero == 80 && porcentaje_agua == 80) {
        let i = 0;
        const intervalId = setInterval(() => {
            temperatura -= 20;
            texto3.setText(temperatura + '°');
            i++;

            if (i === 15) {
                clearInterval(intervalId); // Detener el intervalo después de 15 iteraciones

                if (temperatura === 0) {
                    texto5.visible = false;
                    texto6.visible = true;
                    this.apagar.visible = false;
                    this.apagar2.visible = true;
                }
            }
        }, 900);
    }

    // Controlar la visibilidad de las imágenes de agua
    this.agua.visible = false;
    this.agua2.visible = false;
    this.agua3.visible = false;
    this.agua4.visible = false;
    this.agua5.visible = false;

    if (numeroEntero == 60) {
        this.agua.visible = true;
    } else if (numeroEntero == 70) {
        this.agua2.visible = true;
    } else if (numeroEntero == 80) {
        this.agua3.visible = true;
    } else if (numeroEntero == 90) {
        this.agua4.visible = true;
    } else if (numeroEntero == 100) {
        this.agua5.visible = true;
    }
}, this);

// Bajar Agua
this.boton_menos.setInteractive();
this.boton_menos.on('pointerdown', function () {
    if (numeroEntero > 0) {
        numeroEntero -= 10;
        porcentaje_agua -= 10;

        // Asegurar que no sean negativos
        if (numeroEntero < 0) {
            numeroEntero = 0;
            porcentaje_agua = 0;
        }

        // Asegurar que numeroEntero no supere 100
        if (numeroEntero > 100) {
            numeroEntero = 100;
            porcentaje_agua = 100;
        }

        texto2.setText(numeroEntero + '%');
        texto4.setText(porcentaje_agua + '%');
    }

    // Controlar la visibilidad de las imágenes de agua al bajar
    this.agua.visible = false;
    this.agua2.visible = false;
    this.agua3.visible = false;
    this.agua4.visible = false;
    this.agua5.visible = false;

    if (numeroEntero == 60) {
        this.agua.visible = true;
    } else if (numeroEntero == 70) {
        this.agua2.visible = true;
    } else if (numeroEntero == 80) {
        this.agua3.visible = true;
    } else if (numeroEntero == 90) {
        this.agua4.visible = true;
    } else if (numeroEntero == 100) {
        this.agua5.visible = true;
    }
}, this);


//bucle de la foto del reactor
const reactor1 = this.add.image(470, 310, 'reactor1');
const reactor2 = this.add.image(470, 310, 'reactor2');

// Inicializar la visibilidad
reactor2.visible = false;

// Inicializar el evento de alternancia
const alternanciaEvento = this.time.addEvent({
    delay: 500,
    callback: function () {
        reactor1.visible = !reactor1.visible;
        reactor2.visible = !reactor2.visible;
    },
    callbackScope: this,
    loop: true
});

//temporizador
var temporizador=30;
		var texto10 = this.add.text(1245, 57,'00:00:'+ temporizador,  {
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#ffffff'
    });

    texto10.setOrigin(1, 0); // Establece el origen del texto en la esquina superior derecha
	texto10.setDepth(1); // Establece una profundidad mayor que la de la imagen (por ejemplo, 1)
	this.perdida.visible = false;

// Actualizar el temporizador cada segundo
const intervaloTemporizador = setInterval(() => {
    temporizador--;
    texto10.setText('00:00:'+temporizador );

    // Verificar si el temporizador ha llegado a cero
    if (temporizador <= 0) {
        // Mostrar la imagen 'perdida'
        this.perdida.visible=true;
		texto1.visible = false;
		texto2.visible = false;
		texto3.visible = false;
		texto4.visible = false;
		texto5.visible = false;
		texto6.visible = false;
		texto10.visible=false;
		reactor1.visible = false;
		reactor2.visible = false;

        // Detener el intervalo de actualización del temporizador
        clearInterval(intervaloTemporizador);

        // Pausar la escena u otra lógica según tus necesidades
        this.scene.pause();
        // O puedes agregar aquí tu lógica para reiniciar el juego, mostrar un mensaje, etc.
    }
}, 1250);




//codigo para la finalizacion del programa

	texto6.visible=false;
	this.tV___128.visible=false;
	this.apagar2.visible=false;

	this.apagar2.setInteractive();
	this.apagar2.on('pointerdown', function () {
		// Detener el evento de alternancia
		alternanciaEvento.remove();
		
		var texto11 = this.add.text(95, 120,' El tiempo se ha detenido a los 00:00:'+ temporizador+' segundos restantes.',  {
			fontFamily: 'Arial',
			fontSize: 40,
			color: '#ffffff'
		});
		clearInterval(intervaloTemporizador);

		// Hacer invisible las imágenes y otros elementos
		reactor1.visible = false;
		reactor2.visible = false;
		texto10.visible=false;
		texto1.visible = false;
		texto2.visible = false;
		texto3.visible = false;
		texto4.visible = false;
		texto6.visible = false;
		this.tV___128.visible = true;
	}, this);









	}







	//FUNCIONES



	aparecer(electricidad, texto1) {
		if (this.oN.visible) {
			// Bucle que disminuye electricidad de 10 en 10 hasta llegar a 0
			for (let i = 0; i < 8; i++) {
				setTimeout(() => {
					electricidad -= 10;
					texto1.setText(electricidad + '%');
				}, i * 1000); // i * 1000 milisegundos (1 segundo) de retraso entre cada actualización
			}
		}else{
			electricidad=80
			texto1.setText(electricidad + '%');
		}
		this.oN.visible = !this.oN.visible;
		this.oFF.visible = !this.oFF.visible;
	}

	




	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
