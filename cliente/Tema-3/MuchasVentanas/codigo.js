/**
 * Crear unas cuantas ventanas a través de un botón y que se vean desplazadas.
 * 
 * @author Francisco Ramírez 
 */

 {
    /**
     * 
     * Cogemos el id del botón y llamamos al método que abrirá una ventana nueva.
     */
    function init(){

        let boton = document.getElementById("abrir");
        boton.addEventListener("click", abrirVentana);

    }

    let abrirVentana = function(){
        let top = -10;
        let left = -10;

        for ( let i =0; i < 5  ; i++) {
            //Abrimos una ventana con esas características
            let ventana = window.open("","","top=" + (top +=10) +",left="+ (left +=10)+ ",height=200,width=300");
            //Escribimos su contenido
            
            ventana.document.write( contenido(i));
            ventana.document.close();
            //Cerramos la ventana
        }

    }
    window.addEventListener("load", init);
 }

function contenido(i) {
    return `
            <!DOCTYPE html>
            <html lang=es>
            <head> 
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Ventana ${i+1}</title>
                <meta name="keywords" content="HTML,CSS,XML,JavaScript">
                <meta name="author" content="Francisco Ramírez Ruiz">
                <script src="cerrar.js" type ="text/javascript"></script>
                </head>
            <body>
                Ventana ${i + 1} <input type='button' id='cerrar' value='cerrar'>
                <noscript><h1>Se requiere javascript</h1></noscript>
                </body>
            </html>`;
}
 