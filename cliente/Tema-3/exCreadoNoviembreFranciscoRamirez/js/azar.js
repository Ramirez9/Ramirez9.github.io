/**
 * 
 * Apartado 1 - Jugar a los dados:
 * A través de html escribe dos entradas donde inhabilites la escritura.
 * Dispondrá de un botón Lanzar
 * Se generan dos dados entre 1-6 y se mostrará debajo su suma.
 * Los números serán aleatorios con el objeto Predefinido visto en clase.
 * Podrá lanzar los dados todas las veces que se desee.
 * Haz uso del template si es necesario.
 * 
 * 
 * Apartado 2 - Jugar con el array:
 * Creará un array máximo de 10 números, números permitidos 0-9.
 * A partir del array aleatorio obtendrá uno pequeño el cual solo posea 1 y 0.
 * Mostrar el array principal obviando sus números impares.
 * Cada vez que recargue la página se generan unos nuevos.
 *
 * @author Francisco Ramírez Ruiz
 */


{
    //Declaro las variables
    let resultado;
    let boton;
    let back;
    let dado1;
    let dado2;

    //Declaro el array
    let array = [];
    let arrayMText;
    let arrayGText;
    let arrayText;

    /**
     * Init, llamo al juego del array y controlo el jugar dados con un click
     * 
     */
    function init() {

        resultado = document.getElementById("resultado");
        boton = document.getElementById("boton");
        back = document.getElementById("atras");
        dado1 = document.getElementById("dado1");
        dado2 = document.getElementById("dado2");

        arrayMText = document.getElementById("arrayMText");
        arrayGText = document.getElementById("arrayGText");
        arrayText = document.getElementById("arrayText");


        jugarArray();
        boton.addEventListener("click", jugarDados);

        volverAtras();

    }

    /**
     * Genero el número aleatorio 1-6
     */
    function tirarDados() {
        return parseInt((Math.random() + 0.2) * 6);
    }

    /**
     * Tiro ambos dados con el método tirarDados y muestro su suma.
     */
    function jugarDados() {
        resultado.innerHTML = "";
        dadoX = tirarDados();
        dadoY = tirarDados();
        dado1.value = dadoX;
        dado2.value = dadoY;
        resultado.innerHTML = `La suma de los dados es:  ${dadoX + dadoY}`;

    }

    /**
     * Genero un array Aleatorio
     */
    function jugarArray() {
        //Lleno el array 10 valores, entre 1-9
        for (let i = 0; i < 10; i++) {
            array[i] = parseInt(Math.random() * 10);
        }
        //Si el elemento es 1 o 0 lo introduzco en el array binario
        let arrayM = array.filter(elem => elem <= 1);
   
        //Muestro los mensajes.
        arrayMText.innerHTML = `Soy binario :( ${arrayM}`;
        arrayGText.innerHTML = `Soy el array Grande: ${array}`;

        // Compruebo por cada elemento si es impar y lo cambio por - 
        array.forEach(function (element, indice) {
            if (element % 2 != 0) {
                array[indice] = '-';
            }
        });
        arrayText.innerHTML = `Compruebo impares: ${array}`;
    }
    function volverAtras() {
        back.addEventListener("click", ev => {
            ev.preventDefault;
            history.back();
        });
    }

    window.addEventListener("load", init);

}


