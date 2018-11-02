/**
 * 2.-Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.

 * 
 * @author Francisco Ramírez Ruiz
 */
{

    function init(){

        arrayIn();

    }

    let arrayIn = function(){


        let personas = ["Francisco", "Raquel", "Juan", "Marta"];
        let persona = {Nombre: "Francisco", Apellido: "Ramírez", Edad: "21"};
        let inicio = document.createElement("ol");
       
    
            let lista = document.createElement("li");
            lista.textContent = "0 in personas = " + (0 in personas);

            let lista2 = document.createElement("li");
            lista2.textContent = "2 in personas = " + (0 in personas);

            let lista3 = document.createElement("li");
            lista3.textContent = "9 in personas = " + (0 in persona);

            let lista4 = document.createElement("li");
            lista4.textContent = "length in personas = " + (0 in personas);

            let lista5 = document.createElement("li");
            lista5.textContent = "Nombre in persona= " + ("Nombre" in persona);

            let lista6 = document.createElement("li");
            lista6.textContent = "Apellido in persona = " + ("Apellido" in persona);

            let lista7 = document.createElement("li");
            lista7.textContent = "Edad in persona = " + ("Edad" in persona);
            
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);
            inicio.appendChild(lista4);
            inicio.appendChild(lista5);
            inicio.appendChild(lista6);
            inicio.appendChild(lista7);

            document.body.appendChild(inicio);

            
        }

        window.addEventListener("load", init);


    }

  
