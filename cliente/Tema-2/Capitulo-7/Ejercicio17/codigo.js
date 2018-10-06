/**
Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún
puede escribir. Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas
horizontales cuando se haya llegado al máximo número de caracteres.

@author Francisco Ramírez Ruiz
 */

{
    let texto, info, codigo;
    const maximo = 100;

    function init() {

        texto = document.getElementById("texto");
        info = document.getElementById("info");

        texto.addEventListener("keypress", tecladoLimitado);
        texto.addEventListener('keypress', msgMaximo);

        
    }

    let tecladoLimitado = function(ev){

        codigo = ev.key;

        console.log(codigo);
        
        if(codigo == 'ArrowUp' || codigo == 'ArrowDown' || codigo == 'ArrowLeft' || codigo == 'ArrowRight' ||
        codigo == 'Delete' || codigo == 'Backspace'){

            return true;
        }else if(texto.value.length >= maximo){

            ev.preventDefault();
        }

        }
      

    let msgMaximo = function () {

        if (texto.value.length >= maximo){
            info.innerHTML = "Ha introducido más de  " + maximo + " caracteres";
            info.style.color = "red";

        }else
            info.innerHTML = "Puedes escribir hasta " + (maximo - texto.value.length -1) + " caracteres adicionales";
           
    }
    window.addEventListener('load', init);

}