/**
 * 5.-Responde con respecto a Set:
 * Un conjunto de elementos de tipo:
 * Constructor admite como parámetros: 
 * Métodos para añadir:
 * Métodos para eliminar:
 * Métodos para buscar:
 * Número de elementos:
 * Si dos elementos son iguales:
 * Se recorren mediante:
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

        Un conjunto de elementos de tipo: <b>valor ej. primitivos </b><br>
        Constructor admite como parámetros: <b>Iterable puede ser array o string</b><br>
        Métodos para añadir: <b>add(value)</b> <br>
        Métodos para eliminar: <b>clear() y delete(value)</b> <br>
        Métodos para buscar: <b>has(value) </b><br>
        Número de elementos: <b>size</b> <br>
        Si dos elementos son iguales:<b> Se reemplaza uno por otro</b><br>
        Se recorren mediante: <b>foreach(callback, arg) y for of </b><br>

        `;

    }
    window.addEventListener("load", init);
}

