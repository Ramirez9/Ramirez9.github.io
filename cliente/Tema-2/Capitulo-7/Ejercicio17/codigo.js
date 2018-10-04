/**
Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún
puede escribir. Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas
horizontales cuando se haya llegado al máximo número de caracteres.

@author Francisco Ramírez Ruiz
 */

{

    let texto, info;

    const maximo = 100;

    function init() {

        texto = document.getElementById("texto");
        info = document.getElementById("info");

        texto.addEventListener('keypress', function(){

            actualizaInfo(maximo);

        });


    }

    function actualizaInfo(maximo) {

        if (texto.value.length >= maximo){
            info.innerHTML = "Ha introducido más de  " + maximo + " caracteres";
            info.style.color = "red";

        }else
            info.innerHTML = "Puedes escribir hasta " + (maximo - texto.value.length -1) + " caracteres adicionales";
           

    }

    window.addEventListener('load', init);

}