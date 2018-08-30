// window.onload = function() {
//     var tarjeta = document.getElementById('tarjeta');
//     console.log(tarjeta);
// }

window.addEventListener('load', function(){
    var contenedor = document.getElementById('contenedor');
    var botonCrear = document.getElementById('crear');
    var texto = document.getElementById('texto');
    var color = document.getElementById('color');

    botonCrear.addEventListener('click', function(){
        var tarjeta = document.createElement('div'); 
        tarjeta.classList.add('tarjeta');
        tarjeta.innerText = texto.value;
        texto.value = "";
        tarjeta.style.backgroundColor = color.value;
        contenedor.appendChild(tarjeta);
    });

   
})