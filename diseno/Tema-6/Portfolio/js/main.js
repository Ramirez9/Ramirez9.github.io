/**
 * 
 * Código js necesario 
 * 
 * @author Francisco Ramírez Ruiz
 * @version 1.0
 */

{

    /**
     * Funcion inicial del programa
     */
    function init() {


        let contador = 1;
        let $section = ($('section, footer').length);

        $(".subir").css("display", "none");

        capturarScroll($section);
        scrollBotones(contador);
        setTimeout(barras, 1000);
        menuIconos(contador);

        cambiosIdiomas();

        habilidades();

    }

    /**
     * Obtiene un parametro al cual le aplica un efecto de 1000 segundos en desplazarse
     */
    function moverSection(msg) {
        $('html, body').clearQueue().animate({
            scrollTop: ($(msg).offset().top)
        }, 1000);

    }

    /**
     * Animación de barras en Información personal.
     * Empleo animate usando el % del valor del contenido.
     */
    function barras() {
        $(".barra-habilidad").each(function () {
            let valorTexto = parseInt($(this).html());
            $(this).animate({
                'width': '' + valorTexto + '%'
            }, 10000);
        });
    }

    /**
     * Capturo el evento click.
     * Dependiendo del id del ICONO muevo a una section u otra.
     * 
     * @param {contador} contador 
     */
    function menuIconos(contador) {
        $("nav > div > a").on("click", function (event) {
            event.preventDefault();
            if ($(this)[0].id == "inicio") {
                moverSection("#1");
                contador = 1;
                //$(".subir").css("display", "none");
            }
            if ($(this)[0].id == "informacion") {
                contador = 2;
                moverSection("#2");
            }
            if ($(this)[0].id == "proyectos") {
                contador = 3;
                moverSection("#3");
            }
            if ($(this)[0].id == "contacto") {
                contador = 4;
                moverSection("#4");
            }
            if ($(this)[0].id == "redes") {
                contador = 5;
                moverSection("#5");
                //$(".subir").css("display", "block");
                //$(".bajar").css("display", "none");
            }
        });
        return contador;
    }

    /**
     * Hago uso de wheel en vez de mousewheel con deltaY para que 
     * FIREFOX lo detecte
     */
    function capturarScroll($section) {
        $('#1, #2, #3, #4, #5').on('wheel', function (event) {
            let sectionAtm;
            let idAtm = event.currentTarget.id;
            $(".foto-perfil").css({
                "transition-duration": "5s",
                "transform": "rotateY(360deg)"
            });
            //WheelDelta devuelve siempre múltiplos de 120.
            if (event.originalEvent.deltaY < 0) {
                console.log("subida");
                if (parseInt(idAtm) - 1 != 0) {
                    sectionAtm = "#" + (parseInt(idAtm) - 1);
                    if ($(sectionAtm) != undefined)
                        moverSection(sectionAtm);
                }
            } else {
                console.log("bajada");
                if (parseInt(idAtm) != $section) {
                    sectionAtm = "#" + (parseInt(idAtm) + 1);
                    if ($(sectionAtm) != undefined)
                        moverSection(sectionAtm);
                }
            }
        });
    }

    /**
     * Capturo el evento click con un contador y lo voy actualizando dependiendo del nivel
     * @param {contador} contador 
     */
    function scrollBotones(contador) {
        $(".subir, .bajar").on("click", function (event) {
            let sectionAtm;
            event.preventDefault();
            if ($(this)[0].id == "subir") {
                sectionAtm = "#" + (--contador);
                if ($(sectionAtm) != undefined)
                    moverSection(sectionAtm);
            } else {
                sectionAtm = "#" + (++contador);
                if ($(sectionAtm) != undefined)
                    moverSection(sectionAtm);
            }
            if (contador > 1)
                $(".subir").css("display", "block");
            else
                $(".subir").css("display", "none");
            if (contador != 5)
                $(".bajar").css("display", "block");
            else
                $(".bajar").css("display", "none");
        });
        return contador;
    }

    $(init);
}

/**
 * Cambia los idiomas dependiendo del valor del select.
 */
function cambiosIdiomas() {
    $("#idiomas").change(function () {

        if ($("#idiomas").val() === "español")
            location.reload();

        if ($("#idiomas").val() === "english")
            textoIngles();

        if ($("#idiomas").val() === "français")
            textoFrances();

    });
}

/**
 * Asocio el evento click a cada habilidad para mostrar un mensaje
 */
function habilidades() {
    $("#habilidad-1").on("click", function () {
        limpiarHabilidad();
        $("#habilidad-1 > p:nth-of-type(2n)").fadeIn(1000, function () {
            $("#habilidad-1  > p:nth-of-type(2n)").css("display", "block");
        });
    });

    $("#habilidad-2").on("click", function () {
        limpiarHabilidad();
        $("#habilidad-2 > p:nth-of-type(2n)").fadeIn(1000, function () {
            $("#habilidad-2  > p:nth-of-type(2n)").css("display", "block");
        });
    });

    $("#habilidad-3").on("click", function () {
        limpiarHabilidad();
        $("#habilidad-3 > p:nth-of-type(2n)").fadeIn(1000, function () {
            $("#habilidad-3  > p:nth-of-type(2n)").css("display", "block");
        });
    });

    $("#habilidad-4").on("click", function () {
        limpiarHabilidad();
        $("#habilidad-4 > p:nth-of-type(2n)").fadeIn(1000, function () {
            $("#habilidad-4  > p:nth-of-type(2n)").css("display", "block");
        });
    });

    $("#habilidad-5").on("click", function () {
        limpiarHabilidad();
        $("#habilidad-5 > p:nth-of-type(2n)").fadeIn(1000, function () {
            $("#habilidad-5  > p:nth-of-type(2n)").css("display", "block");
        });
    });

    $(".habilidades span").on("click", function () {
        limpiarHabilidad();
        $(".habilidades span").css("display", "none");
    });
}

/**
 * Limpio las habilidades
 */
function limpiarHabilidad() {
    $(".habilidades span").css("display", "block");
    $("#habilidad-1  > p:nth-of-type(2n)").css("display", "none");
    $("#habilidad-2  > p:nth-of-type(2n)").css("display", "none");
    $("#habilidad-3  > p:nth-of-type(2n)").css("display", "none");
    $("#habilidad-4  > p:nth-of-type(2n)").css("display", "none");
    $("#habilidad-5  > p:nth-of-type(2n)").css("display", "none");
}

/**
 * Texto traducido en ingles
 */
function textoIngles() {
    //Section 1
    $("#1 div h2").text("Web developer");

    //Section 2
    $(".sobre-mi h2 ").text("Who I am ?");
    $(".sobre-mi p ").text("Let me introduce myself, I'm Francisco Ramírez Web developer.");
    $(".p3").text("Formed in the IES great captain.");
    $(".p1").text("Passionate about creativity and new technologies.");
    $(".p2").text("I get what I propose with positivism and dedication.");
    $(".habilidades h2").text("(Skills);");

    //Section 3
    $(".proyectos a").text("<a = Projects/>");
    $(".e1").text("Rural Hotels");
    $(".e2").text("Task Manager");
    $(".e3").text("Basketbal scoreboard");
    $(".e4").text("Connect four");
    $(".e5").text("Minesweeper");
    $(".e6").text("Cute kitty");
    $(".e7").text("Irregular verbs");
    $(".e8").text("Continents");

    //Section 4
    $("#4 div h2").text("Contact");
    $(".nombre").text("Name");
    $(".email").text("Mail");
    $(".contenido").text("Content");
    $(".submit").val("Submit");

    //Section 5
    $("#5 h2").text("Follow me !");
    $(".derechos p:first-child").text("© 2019 RamirezDeveloper.com. All rights reserved");
    $(".derechos p:nth-of-type(2n)").text("All projects referenced on the page are property of their respective owner.");
    $(".a1").text("PRIVACY | ");
    $(".a2").text("TERMS");
}

/**
 * Texto traducido a frances.
 */
function textoFrances() {
    //Section 1
    $("#1 div h2").text("Développeur Web");

    //Section 2
    $(".sobre-mi h2 ").text("Qui suis-je?");
    $(".sobre-mi p ").text("Laissez-moi me présenter, je suis le développeur Web Francisco Ramírez.");
    $(".p3").text("Formé dans le grand capitaine IES.");
    $(".p1").text("Passionné de créativité et de nouvelles technologies.");
    $(".p2").text("Je reçois ce que je propose avec positivisme et dévouement.");
    $(".habilidades h2").text("(Capacités);");

    //Section 3
    $(".proyectos a").text("<a = Projets/>");
    $(".e1").text("Hôtels ruraux");
    $(".e2").text("Gestionnaire de tâches");
    $(".e3").text("Tableau de bord de basket");
    $(".e4").text("Connecter quatre");
    $(".e5").text("Le Démineur");
    $(".e6").text("Chton mignon");
    $(".e7").text("Verbes irréguliers");
    $(".e8").text("Continents");

    //Section 4
    $("#4 div h2").text("Contact");
    $(".nombre").text("Nom");
    $(".email").text("Courrier électronique");
    $(".contenido").text("Contenu");
    $(".submit").val("Envoyer");

    //Section 5
    $("#5 h2").text("Suivez moi !");
    $(".derechos p:first-child").text("©2019 RamirezDeveloper.com. Tous droits réservés.");
    $(".derechos p:nth-of-type(2n)").text("Tous les projets référencés sur la page sont la propriété de leurs propriétaires respectifs.");
    $(".a1").text("VIE PRIVÉE | ");
    $(".a2").text("TERMES");
}