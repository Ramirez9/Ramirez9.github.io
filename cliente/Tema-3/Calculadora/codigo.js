/**
 * 
 * Calculadora con pequeña funcionalidad cambiando el valor del número
 * 
 * @author Francisco Ramírez Ruiz
 */
{
  
  //Creo un array de Ids para obtener un id distinto a cada botón
  let botonesId = ["btnCE", "btnDEL", "btnPorcentaje", "btnSuma", "btn7", 
    "btn8", "btn9", "btnResta", "btn4", "btn5", "btn6", "btnMult", "btn1", 
    "btn2", "btn3", "btnDiv", "btn0", "btnSigno", "btnPunto", "btnIgual"];

  // Array de botones para sus respectivos textos
  let botones = ["CE", "DEL", "%", "+",
  "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+/-", ",", "="];

  function init() {
    //Creo la calculadora
    crearCalculadora();

    //Acciones de los botones
    arrayBotones();

  }

  /**
   * Creo el layout de la calculadora
   */

  let crearCalculadora = function () {
    //Contador para recorrer el array
    let contador = 0;

    /**
     * Div calculadora donde agrupo todo
     */
    let contenido = document.createElement("div");
    contenido.className = "calculadora";

    /*
     * Creo un h1, con mi Nombre
     */
    let h1 = document.createElement("h1");
    h1.textContent = "Calculadora - Francisco";

    //Creo un elemento div con un input
    let elemento = document.createElement("div");
    let input = document.createElement("input");

    //Lo declaro de tipo text
    input.type = "text";
    //ClassName para su estilo
    input.className = "texto";

    //Le coloco un id texto.
    input.id = "texto";

    //Su valor por defecto será 0
    input.value = 0;

    //Añado las etiquetas a sus padres
    elemento.appendChild(input);
    contenido.appendChild(h1);
    contenido.appendChild(elemento);

    /**
     * Bucle anidado
     * 5 Filas de Div
     * 4 Columnas de botones
     */
    for (let i = 0; i < 5; i++) {
      elemento = document.createElement("div");
      console.log(elemento);
      for (let j = 0; j < 4; j++) {
        //Creo un input de tipo botón.
        input = document.createElement("input");
        input.type = "button";
        /**
         * Le coloco el valor del array botones (texto)
         * y su Id correspondiente ()
         */
        input.value = botones[contador];
        //Coloco un className a todos para su estilo.
        input.className = "button";
        input.id = botonesId[contador];

        contador++;

        elemento.appendChild(input);
      }
      contenido.appendChild(elemento);
    }

    document.body.appendChild(contenido);

  }

  /**
  * Recorremos el array de botonesId
  * Él método forEach ejecuta la función por cada elemento del array
  * Con call, llama a la funcion con un valor this
  */
  function arrayBotones() {
    let botonNumeros = document.getElementsByTagName("input");

    botonesId.forEach.call(botonNumeros, element => {
      //Recojo el valor del elemento pulsando, si selecciono parseInt delante escribira solo los Enteros
      if (element.value)
      //evento al pulsar una tecla
        element.addEventListener("click", function () {
          console.log(this);
          //Cambio el valor del texto, por el valor introducido
          document.getElementById("texto").value = this.value;
        });
    });
  }

  window.addEventListener("load", init);
}