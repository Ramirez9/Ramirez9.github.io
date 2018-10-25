{
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
  let contador = 0;

  function init() {
    calculadora();
  }

  let calculadora = function() {
    let header = document.createElement("header");

    let h1 = document.createElement("h1");
    h1.textContent = "Calculadora - Francisco Ramirez";
    h1.style.color = "red";
    h1.style.textAlign = "center";
    let main = document.createElement("main");
    main.style.textAlign = "center";
    let container = document.createElement("container");

    let div = document.createElement("div");

    let input = document.createElement("input");
    input.type = "text";
    input.style.width = '20%';

    /**
     * Método con los appendChild
     */
    aniadir(header, h1, main, container, div, input);

    for (let i = 0; i < 5; i++) {
      let containerButton = document.createElement("div");

      for (let j = 0; j < 4; j++) {
        let button = document.createElement("button");
        button.type = "button";
        button.style.width = '5%';
        button.style.height = '90%';
        button.style.fontSize = '20px';

        button.textContent = botones[contador++];

        containerButton.appendChild(button);
      }
      container.appendChild(containerButton);
    }
  };
  window.addEventListener("load", init);
}

function aniadir(header, h1, main, container, div, input) {
  header.appendChild(h1);
  main.appendChild(container);
  container.appendChild(div);
  div.appendChild(input);
  document.body.appendChild(header);
  document.body.appendChild(main);
}
