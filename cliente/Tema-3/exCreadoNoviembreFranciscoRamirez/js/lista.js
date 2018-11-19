{

    let anadir;
    let reset;
    let elementoUl
    let error;
    let input;
    let back;

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

    function ExceptionError(str, name) {
        this.message = str;
    }

    function anadirElemento(){
        let regex = /Nota$/g;
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
            let myException = new ExceptionError("Error.");
            throw myException;
        }
    }catch(e){
        error.textContent = e.message;
        }
    }

    function reiniciarLista(){
        let elementosEliminar = document.getElementsByTagName("li");
        
        while(elementosEliminar.length!=0){
          elementosEliminar[0].parentNode.removeChild(elementosEliminar[0]);   
        }
    }
    window.addEventListener("load", init);

}