/**
Completar el código JavaScript proporcionado para que:
1. Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición
del puntero respecto del navegador y respecto de la página
Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su
funcionamiento a partir de su código fuente.
2. Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y
su información asociada
3. Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de
fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una tecla, el
color de fondo debe ser azul (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve
a ser blanco.

@author Francisco Ramirez Ruiz

 */

 {

    let info;

    function init(){

        info = document.getElementById('info');

        //llamamos a los dos métodos

        document.addEventListener("keypress", function(event){

            //con event.key cogemos el botón que se ha pulsado
            //con charCode cogemos el caracter Unicode de una tecla pulsada
            teclado(event.key,event.charCode);

        });

        document.addEventListener("mousemove", function(event){
            
            // Get the horizontal coordinate
            // Get the vertical coordinate
            raton(event.pageX,event.pageY);

        });

 
    }


    let teclado = function(caracter, codigo){
        
        info.style.background = "#CCE6FF";
        info.innerHTML = "Teclado" + "<br>Carácter [" + caracter + "]" + "<br>" +"Código [" + codigo + "] </p>";



    }
    let raton = function(coordenadaX, coordenadaY){

        info.style.background = "#FFFFCC";
        info.innerHTML = "Ratón<br>Navegador " + "[" + coordenadaX + ", " + coordenadaY + "]";
        

    }


    window.addEventListener('load', init);



 }