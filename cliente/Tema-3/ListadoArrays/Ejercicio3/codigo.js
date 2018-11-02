/**
 * 3.- Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    function init(){

        arrayIsArray();

    }

    let arrayIsArray = function(){


        let personas = ["Francisco", "Raquel", "Juan", "Marta"];
        let persona = {Nombre: "Francisco", Apellido: "Ramírez", Edad: "21"};
        let numero = 20;
        let inicio = document.createElement("ol");
       
    
            let lista = document.createElement("li");
            lista.textContent = "personas -> " + (Array.isArray(personas));

            let lista2 = document.createElement("li");
            lista2.textContent = "persona -> " + (Array.isArray(persona));

            let lista3 = document.createElement("li");
            lista3.textContent = "numero -> " + (Array.isArray(numero));
           
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);

            document.body.appendChild(inicio);
          
        }

        window.addEventListener("load", init);


    }

  
