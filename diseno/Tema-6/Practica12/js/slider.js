/**
 * Slider para fotos.
 * @author Francisco Ramirez Ruiz
 */

//Valor inicial de foto
let foto = 1;

/**
 * Muestro la foto seleccionada
 */
let verFoto = function (valor) {

    //Recojo los sliders con sus class
    let slide = document.getElementsByClassName("slide");

    if (valor > slide.length)
        foto = 1;

    if (valor < 1)
        foto = slide.length;

    for (let i = 0; i < slide.length; i++) {
        //Quito las fotos no seleccionadas
        slide[i].style.display = "none";
    }

    //Coloco block para mostrar la deseada
    slide[foto -1].style.display = "block";
}

//Muestro la foto
verFoto(foto);

//Metodo que cambiar el calor y meustra
let cambiarFoto = function (valor) {
    verFoto(foto += valor);
}

let atras = document.getElementById("atras");
atras.addEventListener("click", cambiarFoto.bind(atras, -1));

let next = document.getElementById("siguiente");
siguiente.addEventListener("click", cambiarFoto.bind(siguiente, 1));