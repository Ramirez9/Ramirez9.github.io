/**
 *
 *
 * Interfaz gráfica del buscaminas con JQuery
 *
 * @author Francisco Ramírez Ruiz
 * @version 1.0
 *
 */
let $buscaminasInterfaz;
let $fila;
let $columna;
let $valor;
let $id;
let cronometro;

let initInterfaz = function () {
   $("#botonesDificultad").change(buscaminasGui.iniciarJuego);
   $buscaminasInterfaz = $("#buscaminasInterfaz");
}

let buscaminasGui = {
   iniciarJuego() {
      $buscaminasInterfaz.contextmenu(function (event) {
         event.preventDefault();
      })
      buscaminas.pedirNivel($(this).val());
      $(this).css("display", "none");
      buscaminas.init();
      buscaminasGui.generarTableroGui();
      buscaminasGui.mostrarCronometro();
      $("#banderas").text(" " + buscaminas.banderas);
   },

   generarTableroGui() {
      $buscaminasInterfaz.css({
         "display": "grid",
         "grid-template-columns": "repeat(" + buscaminas.columnas + " ,1fr)",
         "width": "100%"
      });

      for (let i = 0; i < buscaminas.filas; i++) {
         for (let j = 0; j < buscaminas.columnas; j++) {

            $input = $(`<input type='text' id='${i}-${j}' readOnly></input>`);
            $buscaminasInterfaz.append($input);

         }
      }
      $("input").click(function () {
         buscaminasGui.picar($(this));

      })

      $("input").mousedown(function (ev) {
         buscaminasGui.marcar(ev, $(this));
      })
   },

   picar(id) {
      $fila = parseInt(id.prop("id").split("-")[0]);
      $columna = parseInt(id.prop("id").split("-")[1]);

      try {

         buscaminas.picar($fila, $columna);
         buscaminasGui.actualizarTablero();

      } catch (error) {
         $("span").text(error.message);
         buscaminasGui.descubrirMinas();
      }


   },

   marcar(ev, id) {
      $fila = parseInt(id.prop("id").split("-")[0]);
      $columna = parseInt(id.prop("id").split("-")[1]);

      try {
         if (ev.buttons === 2) {
            buscaminas.marcar($fila, $columna);
            if (buscaminas.tableroJugable[$fila][$columna] === "🏴") {
               console.log("Coloco bandera");
               $("#banderas").text(" " + buscaminas.banderas);
               $("#" + $fila + "-" + $columna).css({
                  "background-color": "yellow"
               })
            } else {
               $("#banderas").text(" " + buscaminas.banderas);
               $("#" + $fila + "-" + $columna).css({
                  "background-color": "blue"
               })
            }
         }
      } catch (error) {
         $("span").text(error.message);
      }
   },
   descubrirMinas() {
      for (let i = 0; i < buscaminas.filas; i++) {
         for (let j = 0; j < buscaminas.columnas; j++) {
            let $id = $("#" + i + "-" + j)
            $id.prop("disabled", true);
            if (buscaminas.tableroDescubierto[i][j] === "x") {
               $id.fadeTo("slow", 0.6, function () {
                  $id.css({
                     "background-color": "red",
                     "border": "1px solid black"
                  });
               });
            }
         }
      }
      buscaminasGui.recargarPagina();
   },

   actualizarTablero() {

      for (const coordenada of buscaminas.casillaPulsada) {
         //let $casilla = $("#" + i + "-" + j);
         //console.log($i + "-" + j);
         let i = coordenada.split("-")[0];
         let j = coordenada.split("-")[1];

         //Asignar los valores menos en el 0.
         $valor = $("#" + i + "-" + j)
         $valor.prop("disabled", true);

         // console.log($valor);
         if (buscaminas.tableroJugable[i][j] === 0) {
            $valor.val("");
         } else {
            $valor.val(buscaminas.tableroJugable[i][j]);
         }
         $valor.css({
            "background-color": "rgb(25, 208, 211, 0.6)",
            "transform": "rotate(360deg)",
            "transition-duration": "2s"
         });

      }

   },
   mostrarCronometro() {

      let horas = 0;
      let minutos = 0;
      let segundos = 0;

      let intervalo = setInterval(function () {
         if (!buscaminas.banderaFinalizar && !buscaminas.banderaGanado) {
            //Si llega a 60 segundos coloco 1 minuto
            if (segundos == 59) {
               segundos = -1;
               minutos = parseInt(minutos) + 1;
            }
            //Si llega a 60 minutos coloco 1 hora
            if (minutos == 59) {
               minutos = -1;
               horas = parseInt(horas) + 1;
            }
            //Parseo los segundos y le añado 1
            segundos = (parseInt(segundos) + 1);

            minutos = minutos;
            horas = horas;
            $("#tiempo").text(horas + ":" + minutos + ":" + segundos);
         } else {
            clearInterval(intervalo);
         }
      }, 1000);



   },

   recargarPagina() {
      $('#reiniciar').css("display", "block")
      $('#reiniciar').click(function () {
         location.reload();
      });
   },
}

$(initInterfaz)