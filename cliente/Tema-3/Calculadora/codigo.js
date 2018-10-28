/**
 * 
 * Calculadora con funcionalidad borrar todo, atrás y añadir números 
 * 
 * @author Francisco Ramírez Ruiz
 */
{

  //Creo un array de Ids para obtener un id distinto a cada botón
  let botonesId = ["btnCE", "btnDEL", "btnPorcentaje", "btnSuma", "btn7",
    "btn8", "btn9", "btnResta", "btn4", "btn5", "btn6", "btnMult", "btn1",
    "btn2", "btn3", "btnDiv", "btn0", "btnSigno", "btnPunto", "btnIgual"
  ];

  // Array de botones para sus respectivos textos
  let botones = ["CE", "DEL", "%", "+",
    "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+/-", ",", "="
  ];

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
      //Coloco !isNaN para que no introduzca los demás caracteres
      if (!isNaN(element.value))
        //evento al pulsar una tecla
        element.addEventListener("click", function () {
          console.log(this);

          //Si el valor es 0 y el texto solo 0, machaco su valor
          if (texto.value == 0)
            texto.value = this.value;
          else
            texto.value += this.value;
        });
      //Si el elemento es cambiar de Signo, multiplico el texto por -1  
      if (element.value === "+/-")
        element.addEventListener("click", function () {
          texto.value *= -1;
        });

      //Eliminar todo el contenido
      if (element.value === "CE")
        element.addEventListener("click", function () {
          texto.value = 0;
        });

      //Borra un número 
      if (element.value === "DEL")
        element.addEventListener("click", function () {
          //Si el valor es 1 o menor coloca un 0
          if (texto.value.length <= 1) {
            texto.value = 0;
          } else {
            //texto.value.substring (valor deseado, lenght -1);
            texto.value = texto.value.substring(0, texto.value.length - 1);
          }
        });

    });
  }

  window.addEventListener("load", init);
}