/**
 * Crea una clase Factura tal y como la hemos visto en clase mediante una clase prototipada.
 *
 * Utiliza un formulario para la creación de las facturas. 
 *
 * Identificador de factura (se generará automáticamente mediante un contador de la clase)
 * Fecha de la factura
 * Empresa que emite la factura (común a todas las facturas)
 * Nombre
 * Dirección
 * Teléfono
 * Nif
 * Cliente de la factura:
 * Nombre del cliente 
 * Dirección del cliente
 * Teléfono del cliente
 * Nif del cliente (Confirma que sea válido. En caso contrario no se creará. Ha de ser único)
 * Líneas de la factura
 * Descripción
 * Cantidad
 * Precio por unidad
 * Iva
 * Total
 * Base imponible 
 * Iva (recuerda que hay tres ivas en España)
 * 
 * @author Francisco Ramírez Ruiz
 */
{
    function Cliente(nombre, dirección, teléfono, nif){

        this.nombre = nombre;
        this.dirección = dirección;
        this.teléfono = teléfono;
        this.nif = nif;
    }
}