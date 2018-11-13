/**
 * 11.- Indica la desventaja de realizar esta modificación sobre el objeto
 * wS = new WeakSet(); wS.add({numero: 1});
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
        parrafo.innerHTML = `Demostración - Consola<br><br>
        Al no tener la referencia del objeto, no podemos comprobarlos con has ni eliminarlo con delete.
        `;

        wS = new WeakSet(); 
        wS.add({numero: 1});
        wS.has({numero: 1});
        console.log( wS.has({numero: 1}))
        console.log(wS);
        console.log("Al no tener la referencia del objeto, no podemos comprobarlos con has ni eliminarlo con delete");

    }
    window.addEventListener("load", init);
}

