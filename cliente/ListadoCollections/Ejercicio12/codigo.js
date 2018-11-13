/**
 * 12.- 
 * Responde verdadero falso:
 * Tanto WeakSet como Set almacenan valores únicos
 * WeakSet sólo almacena Objetos
 * La estructura Set autoelimina los objetos que no tienen referencia 
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

        Tanto WeakSet como Set almacenan valores únicos: Verdadero<br>
        WeakSet sólo almacena Objetos: Verdadero<br>
        La estructura Set autoelimina los objetos que no tienen referencia: Falso<br>
        `;

    }
    window.addEventListener("load", init);
}

