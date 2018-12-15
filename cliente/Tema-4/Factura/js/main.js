/**
 * Main de la factura
 * @author Francisco Ramírez Ruiz
 */

{
    let nombre;
    let direccion;
    let telefono;
    let nif;
    let span;

    function init() {
        span = document.getElementById("span");
        nombre = document.getElementById("nombre");
        direccion = document.getElementById("direccion");
        telefono = document.getElementById("telefono");
        nif = document.getElementById("nif");
        document.getElementById("crearFactura").addEventListener("click", crear);
    }

    function crear() {
        try {
            crearVentana(new Empresa(nombre.value,
                direccion.value,
                telefono.value,
                nif.value));
        } catch (e) {
            span.textContent = e.message;
        }
    }

    function crearVentana(empresa) {
        let ventanaNueva = window.open("", "");
        let contenido = `<!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Factura Francisco Ramírez</title>
            <link rel="stylesheet" type="text/css" media="screen" href="css/estilos.css" />
            <script src="js/Cliente.js"></script>
            <script src="js/Factura.js"></script>
            <script src="js/Informacion.js"></script>
            <script src="js/Producto.js"></script>
            <script src="js/creaFactura.js"></script>
        
        </head>
        
        <body>
            <div>
                <div>
                    <h2>EMPRESA</h2>
                    <p id="nEmpresa">Nombre: </p>
                    <p id="dEmpresa">Dirección: </p>
                    <p id="tEmpresa">Teléfono: </p>
                    <p id="nifEmpresa">NIF: </p>
                </div>
                <div>
                    <h2>CLIENTE</h2>
                    <label>Nombre: </label><input id="nCliente" type="text"><br>
                    <label>Dirección: </label><input id="dCliente" type="text"><br>
                    <label>Teléfono: </label><input id="tCliente" type="number"><br>
                    <label>NIF: </label><input id="nifCliente" type="text"><br>
                    <button id="cVaciar">Vaciar</button>
                </div>
            </div>
            <span id="xSpan"></span>
            <div>
                <table id="xTabla">
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>IVA</th>
                    </tr>
                    <tr>
                        <td><input type="text" id="nProducto"></td>
                        <td><input type="number" id="cProduct"></td>
                        <td><input type="number" id="pProducto"></td>
                        <td><input type="number" id="ivaProducto"></td>
                    </tr>
                </table>
            </div>
            <div>
                <button id="nuevoProducto">Nuevo Producto</button>
                <button id="crearFactura">Factura</button>
            </div>
            <div id="mostrar">       
            </div>
        </body>
        
        </html>`;
        ventanaNueva.document.open();
        ventanaNueva.document.write(contenido);
        ventanaNueva.document.close();
        ventanaNueva.xEmpresa = empresa;
    }

    window.addEventListener("load", init);
}