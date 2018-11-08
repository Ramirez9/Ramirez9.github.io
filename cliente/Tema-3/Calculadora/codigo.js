/**
 *
 * Calculadora con funcionalidad acumulada
 *
 * @version 2.0
 * @author Francisco Ramírez Ruiz
 */

{
  //Creo un array de Ids para obtener un id distinto a cada botón
  let botonesId = [
    "btnCE",
    "btnDEL",
    "btnPorcentaje",
    "btnSuma",
    "btn7",
    "btn8",
    "btn9",
    "btnResta",
    "btn4",
    "btn5",
    "btn6",
    "btnMult",
    "btn1",
    "btn2",
    "btn3",
    "btnDiv",
    "btn0",
    "btnSigno",
    "btnPunto",
    "btnIgual"
  ];

  // Array de botones para sus respectivos textos
  let botones = [
    "CE",
    "DEL",
    "%",
    "+",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "x",
    "1",
    "2",
    "3",
    "/",
    "0",
    "+/-",
    ",",
    "="
  ];

  //Declaro y asigno las variables para la version 2.0
  let numero;
  let texto;
  let acumulado = "";
  let operacionBandera = false;
  let entrada;

  function init() {
    //Creo la calculadora
    crearCalculadora();
    //Obtengo la clases de texto "texto"
    texto = document.getElementsByClassName("texto")[0];
    entrada = acciones(entrada, botonesId);
  }

  /**
   * Creo el layout de la calculadora
   */

  let crearCalculadora = function() {
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
  };

  /**
   * Funcionalidad de la calculadora.
   */
  function funcionalidad() {
    //Parseo los números enteros y distintos de NaN
    if (!isNaN(parseInt(this.value))) {
      //Controlo que la operacionBandera no sea true
      if (operacionBandera) 
      texto.value = 0;
      //Si el texto es 0, valor 0
      //Compruebo la coma, para no machacar el 0
      if (texto.value == 0  && !texto.value.includes(".")) 
      texto.value = parseFloat(this.value);
      //Concadeno los números
      else texto.value += parseFloat(this.value);

      //La colo de nuevo a false, por si estaba true.
      operacionBandera = false;
    } else {
      //Sino pulso ni números ni esos botones, llamo a operacionBandera()
      if (
        acumulado != "" &&
        this.value != "CE" &&
        this.value != "+/-" &&
        this.value != "," &&
        this.value != "DEL" &&
        this.value != "%"
      )
      //Metodo operacionBandera
      operacion();

      comprobacion(this.value);

      //Control de operacionBandera para que sea true.
      if (
        this.value != "+/-" &&
        this.value != "," &&
        this.value != "CE" &&
        this.value != "DEL"
      )
        operacionBandera = true;
    }
  }

  /**
   * Compruebo el acumulado para el metodo
   * operacionBandera
   * @param {*} value 
   */
  function comprobacion(value) {
    numero = acumuladoBasico(value, numero, texto);
    switch (value) {
      //acumulado +
      case "+":
        acumulado = "+";
        break;
      //acumulado -
      case "-":
        acumulado = "-";
        break;
      //acumulado x
      case "x":
        acumulado = "x";
        break;
      //acumulado /
      case "/":
        acumulado = "/";
        break;
      //acumulado +/-
      case "+/-":
        //multiplico el texto por -1
        texto.value = parseFloat(texto.value) * -1;
        break;
      //acumulado ,
      case ",":
        if (!operacionBandera) {
          //Sino incluye punto se le añade al texto.
          if (!texto.value.includes(".")) texto.value += ".";
        }
        break;
      //acumulado DEL
      case "DEL":
      texto.value = texto.value.substring(0, texto.value.length - 1);
        if (texto.value.length < 1 || texto.value === "-" || texto.value === "-0.")
          texto.value = 0;
        break;
      //acumulado CE
      case "CE":
        //texto vale 0
        texto.value = 0;
        acumulado = "";
        break;
      //acumulado %
      case "%":
        //valor del texto entre 100
        texto.value = parseFloat(texto.value) / 100;
        break;
      //case =
      case "=":
        //llamo al metodo operacionBandera
        operacion();
        break;
    }
  }

  /**
   * acumulado ! vacío
   * Dependiendo del acumulado seleccionado
   * Haho una operación un otra
   */
  function operacion() {
    if (acumulado != "") {
      switch (acumulado) {
        //Case sumar
        case "+":
          texto.value = parseFloat(texto.value) + numero;
          break;
        //Case restar
        case "-":
          texto.value = numero - parseFloat(texto.value);
          break;
        //Case multiplicar  
        case "x":
          texto.value = parseFloat(texto.value) * numero;
          break;
        //Case dividir  
        case "/":
        //Compruebo que no se divida entre 0
          if(texto.value == 0)
            acumulado == 0
          else
          texto.value = numero / parseFloat(texto.value);
          break;
      }
    }
    //Asigno valor vacío para que no vuelva a entrar en operacionBandera
    acumulado = "";
  }

  /**
   * Acciones addEventListener, click
   * @param {*} entrada 
   * @param {*} botonesId 
   */
  function acciones(entrada, botonesId) {
    entrada = document.getElementsByTagName("input");
    botonesId.forEach.call(entrada, element => {
      element.addEventListener("click", funcionalidad);
    });
    return entrada;
  }
  /**
   * 
   * acumuladoes basicos de la calculadora.
   * @param {*} value 
   * @param {*} numero 
   * @param {*} texto 
   */
  function acumuladoBasico(value, numero, texto) {
    //Si son operacionBanderaes básicas guardo el texto en una variable numero
    //Ambbos 4 hacen lo mismo.
    if (value == "+" || value == "-" || value == "x" || value == "/")
      //Contiente el texto en valor numérico Float
      numero = parseFloat(texto.value);
    return numero;
  }

  window.addEventListener("load", init);
}




