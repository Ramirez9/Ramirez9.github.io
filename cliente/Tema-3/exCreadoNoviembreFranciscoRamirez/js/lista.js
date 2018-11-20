/**
 * Caja de texto, añadir y reiniciar.
 * Al introducir la nota se añadirá al pulsar el botón.
 * El formato a cumplir será el siguiente.
 *  VÁLIDOS
 * Nota 1 Esta es mi nota
 * Nota 22 otra nota más
 * Nota     4      más notas
 * INVÁLIDOS
 * Nota No me gustan los números
 * Esto es una Nota
 * Si el formato no es válido no se limpiar la caja, sino hay que limpiarla.
 * En caso de Error Formato inválido. Ejemplo: Nota 2 Quiero un bocata
 * En la lista debe de aparecer bien escrito.
 * Para eliminar la lista haz uso de parentNode.
 * 
 * @author Francisco Ramírez Ruiz
 */

{
    //Declaro las variables necesarias
    let anadir;
    let reset;
    let elementoUl
    let error;
    let input;
    let back;

    /**
     * Init,  añadoElemento y borro de la lista.
     */
    function init(){
        input = document.getElementById("text");
        anadir = document.getElementById("anadir");
        reset = document.getElementById("reset");
        error = document.getElementById("error");
        elementoUl = document.getElementById("element");
        back = document.getElementById("atras");

        anadir.addEventListener("click", anadirElemento);
        reset.addEventListener("click", reiniciarLista);

        back.addEventListener("click", ev => {
            ev.preventDefault;
            history.back();
          });

    }

    /**
     * Exception con la cadena capturada.
     */
    function ExceptionError(str) {
        this.message = str;
    }

    /**
     * Añado un elemento a la lista controlado con una expresión regular.
     */
    function anadirElemento(){
        let regex = /(\s?[Nota]+\s+\d+) (\s+[a-zA-Záéíóúñ]+\s?)+$/g;
        let values = regex.exec(text.value);
        try{
        regex.exec(input.value);
        if(regex.test(input.value)){
            if (values !== null){
                error.textContent = "";
                let elementoLi = document.createElement("li");
                elementoLi.innerHTML = input.value;
                elementoUl.appendChild(elementoLi);
                input.value="";
            } 
        }else{
            let myException = new ExceptionError("Formato inválido. Ejemplo: Nota 2 Quiero un bocata");
            throw myException;
        }
    }catch(e){
        error.textContent = e.message;
        }
    }

    /**
     * Reinicio la lista y elimino los mensajes.
     * 
     */
    function reiniciarLista(){
        let elementosEliminar = document.getElementsByTagName("li");
        
        while(elementosEliminar.length!=0){
          elementosEliminar[0].parentNode.removeChild(elementosEliminar[0]);   
        }
    }
    window.addEventListener("load", init);

}