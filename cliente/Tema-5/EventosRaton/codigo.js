/**
 * 
 * @author Francisco Ramirez Ruiz
 */

let ctx;
window.onload = function () {

    /*AUXCLICK*/

    let auxclick = document.getElementById('auxClick');
    ctx = auxclick.getContext('2d');
    ctx.fillStyle = colorAleatorio();
    ctx.fillRect(0, 0, 300, 300);

    auxclick.addEventListener('auxclick', xauxclick);

    function xauxclick(event) {
        ctx.fillStyle = colorAleatorio();
        cx = event.pageX;
        cy = event.pageY;
        console.log("Has pulsado el evento: auxclick")
        console.log("X,Y=" + cx + ',' + cy);
    }

    /*CLICK*/

    let click = document.getElementById('click');
    ctx = click.getContext('2d');
    ctx.fillStyle = colorAleatorio();
    ctx.fillRect(0, 0, 300, 300);

    click.addEventListener('click', xClick);

    function xClick(event) {
        ctx.fillStyle = colorAleatorio();
        cx = event.pageX;
        cy = event.pageY;
        console.log("Has pulsado el evento: click")
        console.log("X,Y=" + cx + ',' + cy);
    }

    /*DBCLICK*/

    let dblclick = document.getElementById('dblclick');
    ctx = dblclick.getContext('2d');
    ctx.fillStyle = colorAleatorio();
    ctx.fillRect(0, 0, 300, 300);

    dblclick.addEventListener('click', xdblclick);

    function xdblclick(event) {
        ctx.fillStyle = colorAleatorio();
        cx = event.pageX;
        cy = event.pageY;
        console.log("Has pulsado el evento: dblclick")
        console.log("X,Y=" + cx + ',' + cy);
    }

    /**MOUSEDOWN */
    let mousedown = document.getElementById('mousedown');
    ctx = mousedown.getContext('2d');
    ctx.fillStyle = colorAleatorio();
    ctx.fillRect(0, 0, 300, 300);

    mousedown.addEventListener('mousedown', xMousedown);

    function xMousedown(event) {
        ctx.fillStyle = colorAleatorio();
        cx = event.pageX;
        cy = event.pageY;
        console.log("Has pulsado el evento: mousedown")
        console.log("X,Y=" + cx + ',' + cy);
    }

    /**MOUSEENTER */
    let mouseenter = document.getElementById('mouseenter');
    ctx = mouseenter.getContext('2d');
    ctx.fillStyle = colorAleatorio();
    ctx.fillRect(0, 0, 300, 300);

    mouseenter.addEventListener('mouseenter', xmouseenter);

    function xmouseenter(event) {
        ctx.fillStyle = colorAleatorio();
        cx = event.pageX;
        cy = event.pageY;
        console.log("Has pulsado el evento: mouseenter")
        console.log("X,Y=" + cx + ',' + cy);
    }

    /**MOUSELEAVE */
    let mouseleave = document.getElementById('mouseleave');
    ctx = mouseleave.getContext('2d');
    ctx.fillStyle = colorAleatorio();
    ctx.fillRect(0, 0, 300, 300);

    mouseleave.addEventListener('mouseleave', xmouseleave);

    function xmouseleave(event) {
        ctx.fillStyle = colorAleatorio();
        cx = event.pageX;
        cy = event.pageY;
        console.log("Has pulsado el evento: mouseleave")
        console.log("X,Y=" + cx + ',' + cy);
    }

    /**MOUSEMOVE */
    let mousemove = document.getElementById('mousemove');
    ctx = mousemove.getContext('2d');
    ctx.fillStyle = colorAleatorio();
    ctx.fillRect(0, 0, 300, 300);

    mousemove.addEventListener('mousemove', xmousemove);

    function xmousemove(event) {
        ctx.fillStyle = colorAleatorio();
        cx = event.pageX;
        cy = event.pageY;
        console.log("Has pulsado el evento: mousemove")
        console.log("X,Y=" + cx + ',' + cy);
    }
    /**MOUSEOUT */
    let mouseout = document.getElementById('mouseout');
    ctx = mouseout.getContext('2d');
    ctx.fillStyle = colorAleatorio();
    ctx.fillRect(0, 0, 300, 300);

    mouseout.addEventListener('mouseout', xmouseout);

    function xmouseout(event) {
        ctx.fillStyle = colorAleatorio();
        cx = event.pageX;
        cy = event.pageY;
        console.log("Has pulsado el evento: mouseout")
        console.log("X,Y=" + cx + ',' + cy);
    }
    /**MOUSEOVER */
    let mouseover = document.getElementById('mouseover');
    ctx = mouseover.getContext('2d');
    ctx.fillStyle = colorAleatorio();
    ctx.fillRect(0, 0, 300, 300);

    mouseover.addEventListener('mouseover', xmouseover);

    function xmouseover(event) {
        ctx.fillStyle = colorAleatorio();
        cx = event.pageX;
        cy = event.pageY;
        console.log("Has pulsado el evento: mouseover")
        console.log("X,Y=" + cx + ',' + cy);
    }
    /**MOUSEUP */
    let mouseup = document.getElementById('mouseup');
    ctx = mouseup.getContext('2d');
    ctx.fillStyle = colorAleatorio();
    ctx.fillRect(0, 0, 300, 300);

    mouseup.addEventListener('mousedown', xmouseup);

    function xmouseup(event) {
        ctx.fillStyle = colorAleatorio();
        cx = event.pageX;
        cy = event.pageY;
        console.log("Has pulsado el evento: mouseup")
        console.log("X,Y=" + cx + ',' + cy);
    }


    /*******************************************COLORES************************************* */
    /**
     * Creo un color aleatorio para las bolas
     */
    function colorAleatorio() {
        return "rgb(" + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ")";
    }
    /**
     * Creamos un número aleatorio
     * @param {*} inferior 
     * @param {*} superior 
     */
    function aleatorio(inferior, superior) {
        let numero = superior - inferior;
        let random = Math.floor(Math.random() * numero);
        return parseInt(inferior) + random;
    }


}