/**
 * 
 * 
 */
{
    //Array de nombre de gatitos.
    let nombreGatito = [
        "Bonnie y Clyde", "Zoe", "Piccola", "Silver",
        "Ramsés", "Frida", "Ozzy", "Aruba",
        "Juno", "Snow", "Oreo", "Carlos"
    ];

    //Array de fecha de gatitos.
    let fechaGatito = [
        "March 16, 2017", "January 12, 2017", "November 19, 2017",
        "December 23, 2015", "October 01, 2008", "December 17, 2001",
        "June 17, 2016", "May 22, 2009", "February 02, 2011"
    ];

    //Array de raza de gatitos.
    let razaGatito = ["Azul Ruso", "Persa", "Siamés", "Scottish",
        "Ragdoll", "Maine coon", "Bosque de Noruega", "Angora",
        "Somalí", "Birmano", "Bombay", "Egipcio"
    ];

    //Array de peso de gatitos.
    let pesoGatito = [1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14
    ];

    //Botones para el gatito.
    let btnJugar, btnComer, btnDormir;

    //Parámetros del gatito.
    let nombre, fecha, raza, peso, edad;

    //Span con el mensae de error
    let msgError;

    //Imágen para los estados.
    let img;

    /**
     * Init
     */
    function init() {
        //Botones
        btnJugar = document.getElementById("jugar");
        btnComer = document.getElementById("comer");
        btnDormir = document.getElementById("dormir");

        //Parametros
        nombre = document.getElementById("nombre");
        fecha = document.getElementById("fecha");
        raza = document.getElementById("raza");
        peso = document.getElementById("peso");
        edad = document.getElementById("edad");

        //Mensaje de error
        msgError = document.getElementById("error");

        //Imagen inicial
        img = document.getElementById("img");
        img.innerHTML = `<img src="img/normal.jpg"></img>`;

        //Creo el gato
        let gato = crearGato();

        //Eventos del gatito jugar,comer,mimir
        //Function.prototype.bind() manipula el valor de this.
        btnJugar.addEventListener("click", jugar.bind(gato));
        btnComer.addEventListener("click", comer.bind(gato));
        btnDormir.addEventListener("click", dormir.bind(gato));

        escribir(gato);

    }

    /**
     * Escribo el contenido del gato
     * Nombre
     * Fecha
     * Raza
     * Peso
     * @param {*} gato 
     */
    function escribir(gato) {
        nombre.innerHTML = `<b>Gatito:</b> ${gato.nombre}`;
        fecha.innerHTML = `<b>Fecha:</b> ${gato.fecha}`;
        edad.innerHTML = `<b>Edad:</b> ${gato.obtenerEdad()} años.`;
        raza.innerHTML = `<b>Raza:</b> ${gato.raza}`;
        peso.innerHTML = `<b>Peso:</b> ${gato.peso} kg`;
    };

    /**
     * Creo el gato con los arrays
     */
    let crearGato = function () {

        //Llamo al metodo aleatorio para obtener valores de los arrays
        let { xNombre, xFecha, xRaza, xPeso } = arrayRandom(nombreGatito, fechaGatito, razaGatito, pesoGatito);

        //Devuelvo los valores de gato.
        let gato = new Gato(
            nombreGatito[xNombre],
            fechaGatito[xFecha],
            razaGatito[xRaza],
            pesoGatito[xPeso]
        );

        return gato;
    };

    /**
     * Juego con el gato para que pierda peso
     */
    function jugar() {
        if (this.peso <= 1) {
            this.isMuerto = true;
            //Mensaje de error si el gatito muere
            msgError.innerHTML = "Has matado a tu gato por no darle de comer. :("
            //Compruebo que no esté muerto
        } else if (!this.isMuerto){
            this.jugarGatito(); //Jugar de
            img.innerHTML = `<img src="img/jugando.jpg">`;
            escribir(this);  //Escribo de nuevo el contenido para actualizar el peso
        }
    };

    /**
     * Doy de comer al gato.
     */
    function comer() {
        //Si sobrepasa el peso muere
        if (this.peso >= 15) {
            this.isMuerto = true;
            //Mensaje de error si el gatito muere
            msgError.innerHTML = "El gatito ha muerto de gordura :("
            //Compruebo que no esté muerto
        } else if (!this.isMuerto){
            this.comerGatito();// Comer de gato.js
            img.innerHTML = `<img src="img/comiendo.jpg">`;
            escribir(this); //Escribo de nuevo el contenido para actualizar el peso
        }
    };

    /**
     * Sino está muerto indico la imágen durmiendo
     */
    function dormir() {
        if (!this.isMuerto)
            img.innerHTML = `<img src="img/durmiendo.jpg">`;
    };

    /**
     * Obtengo aleatorios de los arrays
     * @param {*} nombreGatito 
     * @param {*} fechaGatito 
     * @param {*} razaGatito 
     * @param {*} pesoGatito 
     */
    function arrayRandom(nombreGatito, fechaGatito, razaGatito, pesoGatito) {
        let xNombre = Math.floor(Math.random() * nombreGatito.length);
        let xFecha = Math.floor(Math.random() * fechaGatito.length);
        let xRaza = Math.floor(Math.random() * razaGatito.length);
        let xPeso = Math.floor(Math.random() * pesoGatito.length);
        return { xNombre, xFecha, xRaza, xPeso };
    }

    window.addEventListener("load", init);
}


