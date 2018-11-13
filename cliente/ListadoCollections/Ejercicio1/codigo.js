/**
 * 1.- Tanto los objetos javaScript como los Maps permiten almacenar pares clave/valor. Indica la diferencia entre ambos.
 * 
 * @author Francisco Ramírez Ruiz
 */
{
    let parrafo;

    function init(){

        parrafo = document.getElementById('parrafo');

        texto();

    }

    function texto() {
        parrafo.innerHTML = `

        Objeto -> Claves : Strings y Symbols<br>

        Map -> Claves: cualquier tipo, funciones, objetos, valores primitivos...<br>

        Map permite iterar directamente sobre si mismo, en cambio para un objeto debemos de tener las claves para poder iterarlo<br>

        `;

    }
    window.addEventListener("load", init);
}

