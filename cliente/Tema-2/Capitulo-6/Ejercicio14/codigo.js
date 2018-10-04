/**
A partir de la página web proporcionada, completar el código JavaScript para que:
1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de
contenidos
3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del
primer enlace
4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:
propiedad innerHTML)

@author Francisco Ramirez Ruiz

 */

 {
    //declaramos las variables.
    let p1, p2, p3, e1, e2, e3;

    function init(){

        //1º seleccionamos los correspondientes id del codigo html.
        p1 = document.getElementById("contenidos_1");
        e1 = document.getElementById("enlace_1");

        p2 = document.getElementById("contenidos_2");
        e2 = document.getElementById("enlace_2");

        p3 = document.getElementById("contenidos_3");
        e3 = document.getElementById("enlace_3");

        //Usamos block porque llevan la etiqueta <p>
        p1.style.display = "block";
        p2.style.display = "block";
        p3.style.display = "block";

        //Añadimos los eventos a cada enlace e1, e2, e3

        e1.addEventListener('click', function(event){
            //preventDefault evita que se diriga al enlace de por defecto, en este caso es #
            event.preventDefault;
            //llamamos al metodo mostrarOcultar()
            mostrarOcultar(p1, e1);

        });

        e2.addEventListener('click', function(event){ 
            event.preventDefault;
            mostrarOcultar(p2, e2);

        });

        e3.addEventListener('click', function(event){  
            event.preventDefault;
            mostrarOcultar(p3, e3);

        });
    }

    let mostrarOcultar = function(contenido, enlace){
        //Si el contenido se está mostrando en forma de bloque usamos el estilo
        //none para que desaparezca
        if(contenido.style.display == "block"){
            contenido.style.display = "none";
            enlace.textContent = "Volver a mostrar";
        }else{
            //Sino, mostramos el bloque de nuevo
            contenido.style.display = "block";
            enlace.textContent = "Ocultar contenidos";
        }
    }

    window.addEventListener('load' , init);
 }