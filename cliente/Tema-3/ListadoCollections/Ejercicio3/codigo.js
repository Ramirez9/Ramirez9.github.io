/**
 * 3.-Responde con respecto a Map: 
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
  
        Un conjunto de elementos de tipo: <b>clave/valor</b><br>
        Constructor admite como parámetros: <b>Iterable, podría ser un array</b> <br>
        Métodos para añadir: <b>set(key,value)</b><br>
        Métodos para eliminar: <b>delete(key)</b><br>
        Métodos para buscar: <b>get(key)</b><br>
        Número de elementos: <b>size</b><br>
        Si dos elementos son iguales: <b>Con distinto índice se añaden los dos, foreach(callback,argumento) y a for of</b><br>
        Se recorren mediante: <b>foreach(callback,argumento) y a for of</b><br>
        
        `;

    }
    window.addEventListener("load", init);
}

