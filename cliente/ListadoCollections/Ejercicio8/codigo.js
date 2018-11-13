/**
 * 8.- Responde con respecto a WeakSet:
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

        Un conjunto de elementos de tipo: <b>objetos, permite almacenarlos</b><br>
        Constructor admite como parámetros: <b>Objeto iterable</b><br>
        Métodos para añadir: <b>add(value)</b> <br>
        Métodos para eliminar: <b>delete()</b> <br>
        Métodos para buscar: <b>has(value)</b> <br>
        Número de elementos: <b>No existe</b> <br>
        Si dos elementos son iguales: <b>Misma referencia = no se añade</b><br>
        Se recorren mediante: <b>No existe</b> <br>

        `;

    }
    window.addEventListener("load", init);
}

