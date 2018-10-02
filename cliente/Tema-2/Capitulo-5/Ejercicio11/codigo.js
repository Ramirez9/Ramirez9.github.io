/**
A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:

1.-Número de enlaces de la página
2.-Dirección a la que enlaza el penúltimo enlace
3.-Numero de enlaces que enlazan a http://prueba
4.-Número de enlaces del tercer párrafo

@author Francisco Ramírez Ruiz

 */

{
    //1.-Según el número de enlaces de la página
    let numeroEnlaces = document.getElementsByTagName("a");

    //4.-Número de enlaces del tercer párrago
    let numeroParrafos = document.getElementsByTagName("p");

    let numeroEnlacesParrafo = numeroParrafos[2].getElementsByTagName("a");

    //3.-Número de enlaces que apunta a  http://prueba

    let contador = 0;

    for (let i = 0; i < numeroEnlaces.length; i++) {
        if (numeroEnlaces[i].href == 'http://prueba/' || numeroEnlaces[i].href == 'http://prueba')
            contador++;
    }

    //creamos y eliminamos nodos "trozos de la página web" con Nodos.
    let crearElemento = (texto) => {
        let nodo = document.createElement("h4");
        nodo.appendChild(document.createTextNode(texto));
        document.body.appendChild(nodo);
    }

    crearElemento("Número de enlaces: " + numeroEnlaces.length);
    //Egestas URL 
    crearElemento("Dirección del penúltimo enlace: " + numeroEnlaces[numeroEnlaces.length - 2].href);
    crearElemento("El número de enlaces que apuntan a http://prueba es: " + contador);
    crearElemento("Número de enlaces del tercer párrafo: " + numeroEnlacesParrafo.length);



}