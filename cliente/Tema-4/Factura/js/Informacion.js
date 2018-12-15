/**
 * Información de la empresa
 * @author Francisco Ramirez
 */

/**
 * Clase información
 * Con bases e iva
 * @param {*} baseImponible 
 * @param {*} iva 
 * @param {*} total 
 */
function Informacion(baseImponible, iva, total) {
    this.baseImponible = baseImponible;
    this.iva = iva;
    this.total = total;
}
/**
 * BaseImponible
 * @param {*} baseImponible 
 */
Informacion.prototype.setBaseImponible = function (baseImponible) {
    if (isNaN(baseImponible))
        throw new Error("La base es un número");
    this.baseImponible = baseImponible;
}
/**
 * Iva
 * @param {*} iva 
 */
Informacion.prototype.setIva = function (iva) {
    if (isNaN(iva))
        throw new Error("El Iva es un número");
    this.iva = iva;
}
/**
 * Agrego el iva al total del producto
 * @param {*} iva 
 * @param {*} totalProducto 
 */
Informacion.prototype.agregarIva = function(iva, totalProducto){
    let bandera = false;
    for (let i = 0; i < this.iva.length; i++) {
        if(this.iva[i][0] == iva){
            this.iva[i][1] += totalProducto;
            encontrado = true;
        }
    }
    if(!bandera){
        this.iva.push([iva,totalProducto]);
    }
}
/**
 * Calculo el iva diviendo entre 100
 */
Informacion.prototype.calcularIva = function(){
    let total = 0;
    for (let i = 0; i < this.iva.length; i++) 
        total += (this.iva[i][0] * this.iva[i][1]) / 100;
    return total;
}
/**
 * Obtengo el iva a mostrar
 */
Informacion.prototype.ivaMostrar = function(){
    let ivaParaMostrar = [];
    for (let i = 0; i < this.iva.length; i++) 
        ivaParaMostrar.push([this.iva[i][0],(this.iva[i][0] * this.iva[i][1]) / 100]);
    return ivaParaMostrar;
}
/**
 * Total de la cantidad del producto
 * @param {*} total 
 */
Informacion.prototype.setTotal = function (total) {
    if (isNaN(total))
        throw new Error("El total es un número");
    this.total = total;
}