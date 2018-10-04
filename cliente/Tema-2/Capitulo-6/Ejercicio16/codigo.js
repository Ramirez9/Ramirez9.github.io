/** 
Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas
definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para
determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador()
proporcionada.

@author Francisco Ramírez Ruiz
 */

{
    //Anchura y altura de pantalla
    let windowWith, windowHeight;

    let posicion;

    function init() {

        windowWith = window.innerWidth;
        windowHeight = window.innerHeight;
        posicion = document.getElementById("posicion");

        document.addEventListener('click', function (event) {

            if (event.screenX < (windowWith / 2) && event.screenY <= (windowHeight / 2)) {
                posicion.innerHTML = "Arriba a la izquierda";

            } else if (event.screenX > (windowWith / 2) && event.screenY <= (windowHeight / 2)) {
                posicion.innerHTML = "Arriba a la derecha";

            } else if (event.screenX < (windowWith / 2) && event.screenY > (windowHeight / 2)) {
                posicion.innerHTML = "Abajo a la izquierda";

            } else {
                posicion.innerHTML = "Abajo a la derecha";
            }
        });
    }
    window.addEventListener('load', init);
}