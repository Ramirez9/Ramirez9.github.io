{

    let resultado;
    let boton;
    let back;
    let dado1;
    let dado2;

    let array = [];
    let arrayMText;
    let arrayText;

    function init() {

        resultado = document.getElementById("resultado");
        boton = document.getElementById("boton");
        back = document.getElementById("atras");
        dado1 = document.getElementById("dado1");
        dado2 = document.getElementById("dado2");

        arrayMText = document.getElementById("arrayMText");
        arrayText = document.getElementById("arrayText");


        jugarArray();
        boton.addEventListener("click", jugarDados);

        back.addEventListener("click", ev => {
            ev.preventDefault;
            history.back();
        });

    }

    function tirarDados() {
        let x = parseInt((Math.random() + 0.1) * 6);
        return x;
    }

    function jugarDados() {
        resultado.innerHTML = "";
        dadoX = tirarDados();
        dadoY = tirarDados();
        dado1.value = dadoX;
        dado2.value = dadoY;
        resultado.innerHTML = `La suma de los dados es:  ${dadoX + dadoY}`;

    }

    function jugarArray() {
        // Llenar array de valores aleatorios
        for (let i = 0; i < 10; i++) {
            array[i] = parseInt(Math.random() * 10);
        }
        let arrayM = array.filter(elem => elem <= 5);
   
        arrayMText.innerHTML = `Mi array de números aleatorios ${arrayM}`;

        // Compruebo por cada elemento si es impar y lo marco
        array.forEach(function (element, indice) {
            if (element % 2 != 0) {
                array[indice] = '-';
            }
        });
         arrayText.innerHTML = `Compruebo impares: ${array}`;
    }

    window.addEventListener("load", init);

}