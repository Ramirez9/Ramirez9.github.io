/**
 * 
 * @author Francisco Ramirez Ruiz
 */
{
    /*
     * Declaro las variables necesarias
     */
    let tabla;

    //Ids de los datos
    let xSpan;
    let nCliente;
    let dCliente;
    let tCliente;
    let nifCliente;
    let mostrar;
    let cVaciar;

    //Td para para las tablas
    let td;
    //Empresa temporal del main para obtener la información
    let empresa = xEmpresa;

    /**
     * Function init, obtengo ids y asigno eventos
     */
    function init() {

        //Muestro la información de la empresa obtenida del main.js
        informacionEmpresa();

        //Obtengo los ids correspondientes
        xSpan = document.getElementById("xSpan");
        mostrar = document.getElementById("mostrar");
        tabla = document.getElementById("xTabla");
        cVaciar = document.getElementById("cVaciar");
        nCliente = document.getElementById("nCliente");
        dCliente = document.getElementById("dCliente");
        tCliente = document.getElementById("tCliente");
        nifCliente = document.getElementById("nifCliente");

        //Asigno eventos de crear y limpiar datos con click.
        cVaciar.addEventListener("click", vaciarDatos);
        document.getElementById("nuevoProducto").addEventListener("click", xProducto);
        document.getElementById("crearFactura").addEventListener("click", crearFactura);
    }

    /**
     * Obtengo una línea nueva de producto
     */
    function xProducto() {
        let arrayLineas = ["nProducto", "cProducto", "pProducto", "ivaProducto"];
        let linea = document.createElement("tr");
        let input;
        for (let i = 0; i < arrayLineas.length; i++) {
            td = document.createElement("td");
            input = document.createElement("input");
            input.id = arrayLineas[i];
            //El primer elemento siempre es text, resto numbers
            if (i == 0)
                input.type = "text";
            else
                input.type = "number";
            td.appendChild(input);
            linea.appendChild(td);
        }
        tabla.appendChild(linea);
    }

    /**
     * Creo la factura
     */
    function crearFactura() {
        try{
        //Creo la factura de su clase correspondiente
        let factura = new Factura(empresa, xCliente(), tablaProductos());
        factura.calcularFactura();
        //Muestro la factura
        mostrarFactura(factura);
        }catch(e){
            //Muestro errores de las clases
           xSpan.textContent = e.message;
        }
    }

    /**
     * Muestro la factura creada con sus respectivas líneas
     * @param {*} factura 
     */
    function mostrarFactura(factura) {
        //Muestro la información de iva
        let ivas = factura.informacion.ivaMostrar();
        let xTabla = document.createElement("table");
        xTabla.id = "tablaTotal";
        let fila;
        for (let i = 0; i < ivas.length; i++) {
            fila = document.createElement("tr");
            td = document.createElement("td");
            td.appendChild(document.createTextNode(ivas[i][0] + "% IVA"));
            fila.appendChild(td);
            td = document.createElement("td");
            td.appendChild(document.createTextNode(ivas[i][1] + " €"));
            fila.appendChild(td);
            xTabla.appendChild(fila);
        }
        /*
        * Base imponible
        * de la Factura
        */
        fila = document.createElement("tr");
        td = document.createElement("td");
        td.appendChild(document.createTextNode("BASE IMPONIBLE"));
        fila.appendChild(td);
        td = document.createElement("td");
        td.appendChild(document.createTextNode(factura.informacion.baseImponible + "€"));
        fila.appendChild(td);
        xTabla.appendChild(fila);

        /*
        * Cantidad total 
        * de la Factura
        */
        fila = document.createElement("tr");
        td = document.createElement("td");
        td.appendChild(document.createTextNode("TOTAL"));
        fila.appendChild(td);
        td = document.createElement("td");
        td.appendChild(document.createTextNode(factura.informacion.total + "€"));
        fila.appendChild(td);
        xTabla.appendChild(fila);

        tablaFinal = document.getElementById("tablaTotal");

        mostrar.appendChild(xTabla);
        xSpan.textContent == "";
    }

    /**
     * Recorro la tabla de productos
     */
    function tablaProductos() {
        let productos = [];
        for (let i = 1; i < tabla.rows.length; i++) {
            productos.push(new Producto(
                tabla.rows[i].cells[0].childNodes[0].value,
                tabla.rows[i].cells[1].childNodes[0].value,
                tabla.rows[i].cells[2].childNodes[0].value,
                tabla.rows[i].cells[3].childNodes[0].value,
            ));
        }
        return productos;
    }

    /**
     * Limpio los datos del cliente
     */
    function vaciarDatos() {
        nCliente.value = "";
        dCliente.value = "";
        tCliente.value = "";
        nifCliente.value = "";
    }

    /**
     * Muestro la información de la empresa
     */
    function informacionEmpresa() {
        document.getElementById("nEmpresa").textContent += empresa.nombre;
        document.getElementById("tEmpresa").textContent += empresa.telefono;
        document.getElementById("dEmpresa").textContent += empresa.direccion;
        document.getElementById("nifEmpresa").textContent += empresa.nif;
    }
    /**
     * Obtengo los valores del cliente.
     */
    function xCliente() {
        let nCliente = document.getElementById("nCliente").value;
        let dCliente = document.getElementById("dCliente").value;
        let tCliente = document.getElementById("tCliente").value;
        let nifCliente = document.getElementById("nifCliente").value;
        return new Cliente(nCliente, dCliente, tCliente, nifCliente);
    }
    window.addEventListener("load", init);
}