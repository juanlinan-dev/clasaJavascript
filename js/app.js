/*  
const transporte = document.getElementById("transporte")
const respuesta = document.getElementById("respuesta")

transporte.addEventListener("change", function () {
    respuesta.textContent = "Opcion selecionada: " + transporte.value;
})

const tipoEntrega = document.getElementById("entrega");
const salida = document.getElementById("salida");

tipoEntrega.addEventListener("change", function ()
{
    let opcion = tipoEntrega.value;
    if (opcion === "domicilio") {
        salida.textContent = "Entrega estimada: 2 dias";
    }
    else if (opcion === "tienda"){
        salida.textContent = "Puede recoger hoy";
    }
    else{
        salida.textContent = "Seleccione una opcion";
    }
})
const tipourgencia = document.getElementById("selector");
const salida = document.getElementById("salida");

tipourgencia.addEventListener("change", function ()
{
    let opcion = tipourgencia.value;
    if (opcion === "baja") {
        salida.textContent = "Puede esperar";
    }
    else if (opcion === "media"){
        salida.textContent = "Atender proximamente";
    }
    else if (opcion === "alta"){
        salida.textContent = "Atencion prioritaria";
    }
    else{
        salida.textContent = "Seleccione una opcion";
    }
})*/
// Ejercicio

const numero = document.getElementById("numeroFav");
const salidaNumero = document.getElementById("salidaN");
const boton = document.getElementById("boton");

numero.addEventListener("input", function(){
    let num = numero.value;
    let numeroFavorito = 10;
    if (num < numeroFavorito) {
        salidaNumero.textContent = "El numero ingresado es menor"
    }
    else if(num > numeroFavorito){
        salidaNumero.textContent = "El numero ingresado es mayor"
    }
    else{
        salidaNumero.textContent = "¡Felicidades El numero es Correcto!"
    }
})

const gustos = document.getElementById("selector");
const salidaG = document.getElementById("salidaGustos");
const img = document.getElementById("img")

gustos.addEventListener("change", function ()
{
    let opcion = gustos.value;
    if (opcion === "futbol") {
        salidaG.textContent = "Real Madrid el mejor equipo de la historia";
        img.src="img/real.jpg"
        img.style.width = "auto"; 
        img.style.height = "300px";
    }
    else if (opcion === "musica"){
        salidaG.textContent = "Myke Towers";
        img.src="img/music.jpg"
        img.style.width = "auto"; 
        img.style.height = "300px";
    }
    else if (opcion === "prog"){
        salidaG.textContent = "La programacion es un parte importante en mi vida";
        img.src="img/python.jpg";
        
    }
    else{
        salidaG.textContent = "Seleccione una opcion";
        img.src="img/images.jpg";
    }

})

boton.addEventListener("click", function(){
    alert("Fin de la pagina");
} );

