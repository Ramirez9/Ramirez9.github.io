/**
 * 10.-Crea mediante iterables estos dos objetos collections. Indica el número de elementos de cada uno. Justifica el comportamiento: 
 * b = new WeakSet([{}, {}]);
 * o = {}; 
 * a = new WeakSet([o, o]);
 * @author Francisco Ramírez Ruiz
 */
{
    let parrafo;

    function init(){

        parrafo = document.getElementById('parrafo');

        texto();

    }

    function texto() {
        parrafo.innerHTML = `Demostración-Consola <br><br>
        
        El primer WeakSeat ha creado dos objetos, los cuales tienen distinta referencia de memoria<br><br>

        Sin embargo el segundo WeakSet, está llamando al objeto guardar en la variable \'o\' por lo cual tiene la misma referencia de memoria
        
        `;
        b = new WeakSet([{}, {}]);
        o = {};  
        a = new WeakSet([o, o]);
        console.log(b);
        console.log(o);
        console.log(a);

        console.log("El primer WeakSeat ha creado dos objetos, los cuales tienen distinta referencia de memoria")

        console.log("Sin embargo el segundo WeakSet, está llamando al objeto guardar en la variable \'o\' por lo cual tiene la misma referencia de memoria");

    }
    window.addEventListener("load", init);
}

