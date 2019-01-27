/**
 * 
 * Clase Reserva
 * 
 * @author Francisco Ramírez
 */

 /**
  * Clase Reserva
  * @param {*} nombre 
  * @param {*} correo 
  * @param {*} fecha 
  * @param {*} hora 
  * @param {*} noches 
  * @param {*} personas 
  * @param {*} edad 
  * @param {*} comida 
  */
function Reserva(nombre, correo, fecha, hora, noches, personas, edad, comida) {
    this.nombre = nombre;
    this.correo = correo;
    this.setFecha(fecha);
    this.hora = hora;
    this.noches = noches;
    this.personas = personas;
    this.edad = edad;
    this.comida = comida;
    this.id = this.uniqueID();
}
/**
 * Id único y autoincrementable
 */
Reserva.prototype.uniqueID = (function () {
    let id = 1;
    return function () {
        return id++;
    };
})();

/**
 * Muestro la reserva en una ventana nueva
 */
Reserva.prototype.mostrar = function () {

    let ventanaNueva = window.open("", "", "width=300px,height=200px");

    let contenido = `<!DOCTYPE html>
    <html lang="es">
    <head> 
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reserva Francisco Ramírez</title>
        <meta name="keywords" content="HTML,CSS,XML,JavaScript">
        <meta name="author" content="Francisco Ramírez Ruiz">
        </head>
    <body>
        <noscript><h4>Se requiere javascript</h4></noscript>
    
        <h1>Reserva | Francisco Ramírez</h1>
    
        <p><b>Id de la reserva: </b>${this.id}</p>
        <p><b>Nombre completo:</b> ${this.nombre}</p>
        <p><b>Correo electrónico:</b> ${this.correo}</p>
        <p><b>Fecha llegada:</b> ${this.fecha}</p>
        <p><b>Hora llegada:</b> ${this.hora}</p>
        <p><b>Numero de noches:</b> ${this.noches} noche/s</p>
        <p><b>Numero de personas:</b> ${this.personas} persona/s</p>
        <p><b>Servicio de restaurante:</b> ${this.comida}</p>
        <p><b>Edad del cliente:</b>  ${this.edad} años.</p>
        <p><b>Días de la reserva:</b> ${this.calcularDias()}  dia/s.</p>
    </body>
    </html>`;
    ventanaNueva.document.open();
    ventanaNueva.document.write(contenido);
    ventanaNueva.document.close();
}

/**
 * Controlo que la fecha no esté vacía.
 * 
 * @param {*} fecha 
 */
Reserva.prototype.setFecha = function (fecha) {
    if(fecha == "")
        throw new Error("La fecha no puede estar vacía");
    this.fecha = fecha;
}


/**
 * Calculo los días que faltan para la llegada
 */
Reserva.prototype.calcularDias = function () {
    let fechaActual = Date.now();
    let fecha = Date.parse(this.fecha);
    let fechaRestante = fecha - fechaActual;
    let dia = fechaRestante / 1000 / 60 / 60 / 24;
    let diasReales = Math.trunc(fechaRestante / 1000 / 60 / 60 / 24);

    if (diasReales < 0)
        throw new Error("La fecha no se puede calcular");

    if (dia > 0 && dia < 1) 
        return 1;
    return diasReales;
}