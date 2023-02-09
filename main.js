var valor = document.getElementById("numero")
var boton1 = document.getElementById("boton1")
let count = 0;

valor.innerHTML = count;

<<<<<<< HEAD
boton1.addEventListener("click",
    count ++
)

if(count === 69){
    alert("Nice")
}
=======
boton1.addEventListener("click", function() {
    count++;
    valor.innerHTML = count;
    if (count === 69) {
        alert("Nice");
    }
});
>>>>>>> 4b1cde613bf5927815ad5b9b4dc5fcba91e37060
