function CorreMusica(){//funciona cuando se pasa el mouse por el body de la pagina
    document.getElementById("musica").play(); //Corre la musica
}
function PausaMusica(){ //funciona cuando se le da click al boton de musica a la derecha arriba de las paginas
	musica = document.getElementById("musica") 
	if(musica.volume == 0){
		musica.volume = 1; //Le pone el volumen si esta apagado
	}else{
		musica.volume = 0; //Le quita el volumen si esta prendido
	}
}