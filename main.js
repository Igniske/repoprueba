var valor = document.getElementById("numero")
var boton1 = document.getElementById("boton1")
var boton2 = document.getElementById("alerta")
let count = 0;

valor.innerHTML = count;

boton1.addEventListener("click", function() {
    count++;
    valor.innerHTML = count;
    if (count === 69) {
        alert("Nice");
    }
});

boton2.addEventListener("click", function(){
    alert("soy una alerta")
});


