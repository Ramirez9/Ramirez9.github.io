/**
 * 
 * @author Francisco Ramirez Ruiz
 */


/**
 * Clase Factua
 * Empresa, clientes, productos...
 * 
 * @param {*} empresa 
 * @param {*} cliente 
 * @param {*} productos 
 */
function Factura(empresa, cliente, productos) {
    this.empresa = empresa;
    this.cliente = cliente;
    this.productos = productos;
    this.informacion = new Informacion(0, [], 0);
}

/**
 * Calcula La factura
 */
Factura.prototype.calcularFactura = function () {
    let totalProducto;
    for (let producto of this.productos) {
        totalProducto = producto.cantidad * producto.precio;
        this.informacion.baseImponible += totalProducto;
        this.informacion.agregarIva(producto.iva,totalProducto);
    }
    //Obtengo el Iva de la clase Informacion
    this.informacion.total = this.informacion.baseImponible + this.informacion.calcularIva();
}

/**
 * Muestro el total de la información de la factura
 */
Factura.prototype.mostrarTotal = function () {
    return this.informacion.total;
}