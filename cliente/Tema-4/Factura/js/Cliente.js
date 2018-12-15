/**
 * 
 * Clase cliente 
 * Nombre, direcion, telefono y dni
 * Controlo que los datos sean válidos y no esté vacíos
 * 
 * @author Francisco Ramírez Ruiz
 */

let regexNIF = new RegExp("^([\\d]{8})[-\\s]*([A-Z(^IÑOU)])$");
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

/**
 * Clase cliente
 * @param {*} nombre 
 * @param {*} direccion 
 * @param {*} telefono 
 * @param {*} dni 
 */
function Cliente(nombre, direccion, telefono, dni) {
    this.setNombre(nombre);
    this.setDireccion(direccion);
    this.setTelefono(telefono);
    //Trunqueo la letra del DNI
    this.setDNI(dni.toUpperCase().trim());
}
/**
 * Nombre
 * @param {*} nombre 
 */
Cliente.prototype.setNombre = function (nombre) {
    if (nombre == "")
        throw new Error("El nombre no puede ser nulo");
    this.nombre = nombre;
}
/**
 * Direccion
 * @param {*} direccion 
 */
Cliente.prototype.setDireccion = function (direccion) {
    if (direccion == "")
        throw new Error("La dirección no puede ser nula");
    this.direccion = direccion;
}
/**
 * Telefono
 * @param {*} telefono 
 */
Cliente.prototype.setTelefono = function (telefono) {
    if (telefono == "")
        throw new Error("El teléfono no puede ser nulo");
    this.telefono = telefono;
}
/**
 * DNI, compruebo
 * @param {*} dni 
 */
Cliente.prototype.setDNI = function(dni){
    this.comprobarDNI(dni);
    this.dni = dni;
}
/**
 * Compruebo que un DNI sea válido 
 * @param {*} dni 
 */
Cliente.prototype.comprobarDNI = function(dni){
    if(dni.length == 0)
        throw new Error("El DNI no puede ser nulo");
    else if (!regexNIF.test(dni))
        throw new Error("El DNI es incorrecto");
    let [,numeroDNI,letraDNI] = regexNIF.exec(dni);
    if(letras[numeroDNI % 23] != letraDNI)
        throw new Error("La letra no es correcta");
}