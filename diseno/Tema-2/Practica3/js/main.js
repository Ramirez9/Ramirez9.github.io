if (Modernizr.canvas) {
    alert("Tengo canvas al final de la página!!");
    var canvas = document.getElementById("dibujo");
} else {
    alert("No tengo canvas!");
}

if (Modernizr.vibrate) {
    alert("Tengo vibrate!");
} else {
    alert("No tengo vibrate!!");
}
if (Modernizr.notification) {
    alert("Tengo notificaciones!");
  } else {
    alert("No tengo notificaciones");
}

var canvas = document.getElementById("dibujo");
var context = canvas.getContext("2d");
var gradiente = context.createLinearGradient(0, 0, 300, 0);
gradiente.addColorStop(0, "green");
gradiente.addColorStop(1, "orange");
context.fillStyle = gradiente;
context.fillRect(0, 0, 300, 225);