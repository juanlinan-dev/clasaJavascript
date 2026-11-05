const nombre = document.getElementById("name");
const Vistanombre = document.getElementById("VistaNombre");
const edad = document.getElementById("edad");
const EstadoEdad = document.getElementById("EstadoEdad");
const modalidad = document.getElementById("selector");
const infoModalidad = document.getElementById("infoModalidad");
const correo = document.getElementById("correo");
const validarCorreo = document.getElementById("validarCorreo");
const niveles = document.getElementById("niveles");
const ValorNiveles = document.getElementById("ValorNiveles");
const resultado = document.getElementById("vboton");

const formulario = document.getElementById("formulario");

nombre.addEventListener("input", function(){
   
    Vistanombre.textContent =nombre.value +" "+ nombre.value.length+ " caracteres";
    if (nombre.value <= 0) {
        Vistanombre.textContent = "Este campo es obligatorio";
    }

})

edad.addEventListener("input", function(){
    let valor = Number(edad.value);
    if (valor < 0 ){
        EstadoEdad.textContent = "edad fuera de rango, la edad no puede ser un negativa";
    }
    else if(valor > 120){
        EstadoEdad.textContent = "edad fuera de rango, la edad mayor a la permitida";
    }
    else{
        EstadoEdad.textContent = "edad valida";
    }
})

modalidad.addEventListener("change", function(){
    if (modalidad.value == "presencial"){
        infoModalidad.textContent= "Tus horarios disponibles son de 6:00 am - 12pm o 12:00 pm - 6:00 pm\n las sedes son: Sede Minorista - USB CTMA";
    }
    else if (modalidad.value == "virtual"){
        infoModalidad.textContent= "Las pltaformas para realizar las llamdas seran: Classrom - Meet - Zoom";
    }
    else if (modalidad.value == "hibrida"){
        infoModalidad.textContent= "Mediante la plataforma Sofia plus se te dara el horario, dias presenciales y virtuales";
    }
})

correo.addEventListener("focus",function(){
    validarCorreo.textContent="El correo debe contener el @ y un dominio con el .";
})
correo.addEventListener("blur",function () {
    let valorCorreo = correo.value;
    if (valorCorreo.includes("@")) {
        validarCorreo.textContent="Correo valido";
    }
    else{
        validarCorreo.textContent="Correo invalido, falta el @"
    }
})

niveles.addEventListener("change", function(){
    if (niveles.value == "pricipiante"){
        ValorNiveles.textContent= "Sigue esforzandote para subir a de nivel";
    }
    else if (niveles.value == "intermedio"){
        ValorNiveles.textContent= "No estas mal, pero puedes seguir mejorando, no dudes de ti";
    }
    else if (niveles.value == "avanzado"){
        ValorNiveles.textContent= "Asi es que es, a este nivel no llega cualquiera";
    }
})

formulario.addEventListener("submit",function(event){
    if (nombre.value === "" || edad.value === "" || modalidad.value === "" || correo.value === "" || niveles === ""){
        event.preventDefault();
        resultado.textContent="Falta por verificar un campo";
    }
    else{

    }
})
