/**
 * 1.-Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    function init(){

        argumentos();

    }

    let argumentos = function(){


        let array = [0,1,2,3,4,5,6,7,8,9];
        let inicio = document.createElement("ol");
        let i = 1;
        array.forEach((elemento, indice , array) => {
            let lista = document.createElement("li");
            lista.textContent = "Array "+ i +" ->" + (elemento, indice, array);
            i++;
            console.log(elemento, indice, array);
            inicio.appendChild(lista);

            
        });

        document.body.appendChild(inicio);


    }

    window.addEventListener("load", init);

}