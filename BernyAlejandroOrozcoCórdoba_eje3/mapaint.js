function AbrirP(entero){ //Funciona cuando se pasa el mouse por encima de un boton en el mapa interactivo
	switch(entero){ //Hago un switch donde según el boton, se aumenta el tamaño del boton por un momento
					//Y tambien se pone visible la imagen emergente
		case 1:
			document.getElementById("palace").style.width='6%';
			document.getElementById("palace2").style.visibility='visible';
			break;
		case 2:
			document.getElementById("temple").style.width='6%';
			document.getElementById("temple2").style.visibility='visible';
			break;
		case 3:
			document.getElementById("mound").style.width='6%';
			document.getElementById("mound2").style.visibility='visible';
			break;
		case 4:
			document.getElementById("wgorillas").style.width='6%';
			document.getElementById("wgorillas2").style.visibility='visible';
			break;
		case 5:
			document.getElementById("island").style.width='6%';
			document.getElementById("island2").style.visibility='visible';
			break;
		case 6:
			document.getElementById("village").style.width='6%';
			document.getElementById("village2").style.visibility='visible';
			break;
		case 7:
			document.getElementById("mountain").style.width='6%';
			document.getElementById("mountain2").style.visibility='visible';
			break;
		case 8:
			document.getElementById("central").style.width='6%';
			document.getElementById("central2").style.visibility='visible';
			break;
	}
}
function CerrarP(entero){ //Funciona cuando se quita el mouse de un boton en el mapa interactivo
	switch(entero){ //Hago un switch donde según el boton del que se quita el mouse, vuelva al tamaño original
					//Y tambien quita la visibilidad de la imagen emergente
		case 1:
			document.getElementById("palace").style.width='4%';
			document.getElementById("palace2").style.visibility='hidden';
			break;
		case 2:
			document.getElementById("temple").style.width='4%';
			document.getElementById("temple2").style.visibility='hidden';
			break;
		case 3:
			document.getElementById("mound").style.width='4%';
			document.getElementById("mound2").style.visibility='hidden';
			break;
		case 4:
			document.getElementById("wgorillas").style.width='4%';
			document.getElementById("wgorillas2").style.visibility='hidden';
			break;
		case 5:
			document.getElementById("island").style.width='4%';
			document.getElementById("island2").style.visibility='hidden';
			break;
		case 6:
			document.getElementById("village").style.width='4%';
			document.getElementById("village2").style.visibility='hidden';
			break;
		case 7:
			document.getElementById("mountain").style.width='4%';
			document.getElementById("mountain2").style.visibility='hidden';
			break;
		case 8:
			document.getElementById("central").style.width='4%';
			document.getElementById("central2").style.visibility='hidden';
			break;
	}
}

