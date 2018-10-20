/**
 * 
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 * window.open()
 * document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * 
 * @author Francisco Ramirez Ruiz
 */

 {


    //Creamos el contenido de la segunda ventana
    let contenido = `
    <!DOCTYPE html>
    <html lang=es>
    <head> 
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ventana de prueba</title>
        <meta name="keywords" content="HTML,CSS,XML,JavaScript">
        <meta name="author" content="Francisco Ramírez Ruiz">
        
        </head>
    <body>
    <p>Se han utilizado las propiedades: </p>
        <ul>
        <li>height = 200</li>
        <li>width= 300</li>
        </ul>
        <noscript><h1>Se requiere javascript</h1></noscript>
        </body>
    </html>`;
    /**
     * 
     * Cogemos el id del botón y llamamos al método que abrirá una ventana nueva.
     */
    function init(){

        let boton = document.getElementById("abrir");

        boton.addEventListener("click", abrirVentana);

    }

    let abrirVentana = function(){

        /**
         * Primer parámetro vacío: estoy creando la página en el propio codigo
         * Segundo parámetro vacío: nombre por si necesito referenciarla (no es el caso)
         * Tercer parámetro top = Se coloca arriba
         * Cuarto parámetro left = 0 Se coloca a la izquierda
         * Quinto parámetro height = 200 Altura
         * Sexto parámetro width = 300 Anchura
         * 
         */
        let ventana = window.open("","ventanaNueva","top=0,left=0,height=200,width=300");

        //Escribimos su contenido
        ventana.document.write(contenido);
        //Cerramos la ventana
        ventana.document.close();
 
    }
    window.addEventListener("load", init);
 }

