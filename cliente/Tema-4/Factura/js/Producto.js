/**
 * Clase producto con descripcion, cantidades...
 * 
 * @author Francisco Ramírez Ruiz
 */

/**
 * Clase Producto
 * @param {*} descripcion 
 * @param {*} cantidad 
 * @param {*} precio 
 * @param {*} iva 
 */
function Producto(descripcion, cantidad, precio, iva) {
    this.setDescripcion(descripcion);
    this.setCantidad(cantidad);
    this.setPrecio(precio);
    this.setIva(parseInt(iva));
}
/**
 * Descripcion del producto
 * @param {*} descripcion 
 */
Producto.prototype.setDescripcion = function(descripcion){
    if(descripcion == "")
        throw new Error("El producto no puede ser nulo");
    this.descripcion = descripcion;
}
/**
 * Cantidad
 * @param {*} cantidad 
 */
Producto.prototype.setCantidad = function(cantidad){
    if(cantidad == "")
        throw new Error("La cantidad no puede ser nula");
    this.cantidad = cantidad;
}
/**
 * Precio
 * @param {*} precio 
 */
Producto.prototype.setPrecio = function(precio){
    if(precio == "")
        throw new Error("El precio no puede ser nulo");
    this.precio = precio;
}
/**
 * Iva
 * @param {*} iva 
 */
Producto.prototype.setIva = function(iva){
    if(isNaN(iva))
        throw new Error("El iva no puede ser nulo");
    this.iva = iva;
}