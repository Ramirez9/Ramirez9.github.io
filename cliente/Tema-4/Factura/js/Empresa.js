/**
 * 
 * @author Francisco Ramírez Ruiz
 */

/**
 * Clase Empresa
 * Nombre, direccion...
 * @param {*} nombre 
 * @param {*} direccion 
 * @param {*} telefono 
 * @param {*} nif 
 */
function Empresa(nombre, direccion, telefono, nif) {
    this.setNombre(nombre);
    this.setDireccion(direccion);
    this.setTelefono(telefono);
    this.setNif(nif);
}
/**
 * Nombre
 * @param {*} nombre 
 */
Empresa.prototype.setNombre = function (nombre) {
    if (nombre == "")
        throw new Error("El nombre no puede ser nulo");
    this.nombre = nombre;
}
/**
 * Direccion
 * @param {*} direccion 
 */
Empresa.prototype.setDireccion = function (direccion) {
    if (direccion == "")
        throw new Error("La dirección no puede ser nula");
    this.direccion = direccion;
}
/**
 * Telefono
 * @param {*} telefono 
 */
Empresa.prototype.setTelefono = function (telefono) {
    if (isNaN(telefono))
        throw new Error("El telefono no puede ser nulo");
    this.telefono = telefono;
}
/**
 * NIF
 * @param {*} nif 
 */
Empresa.prototype.setNif = function (nif) {
    if (nif == "")
        throw new Error("El NIF no puede ser nulo");
    this.nif = nif;
}