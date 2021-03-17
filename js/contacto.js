function campoRequerido(input){
  if (input.value.trim() === "") {
    input.className = "form-control is-invalid";
    return false;
  } else {
    input.className = "form-control is-valid";
    return true;
  }
}

function validarMail(email){
  let expresion = /\w+@\w+\.[a-z]{2,}$/;
  if (email.value.trim() != "" && expresion.test(email.value)) {
    email.className = "form-control is-valid";
    return true;
  } else {
    email.className = "form-control is-invalid";
    return false;
  }
}

function numeroRequerido(numeros){
    if (numeros.value.trim() != "" && !isNaN(numeros.value)) {
    numeros.className = "form-control is-valid";
    return true;
  } else {
    numeros.className = "form-control is-invalid";
    return false;
  }
}
let mensaje = document.getElementById('consulta');
let contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    let target = e.target;
    let longitudMax = target.getAttribute('maxlength');
    let longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

function consultaRequerida(consulta) {
  if (consulta.value.trim() != "" && consulta.value.length >= 25) {
    consulta.className = "form-control is-valid";
    return true;
  } else {
    consulta.className = "form-control is-invalid";
    return false;
  }
}

let checkTerminos = document.getElementById('checkTerminos');
checkTerminos.addEventListener('change',terminosRequeridos);

function terminosRequeridos() {
    if (checkTerminos.checked) {
    checkTerminos.className = "form-check-input is-valid";
    return true;
  } else {
    checkTerminos.className = "form-check-input is-invalid";
    return false;
  }
}

function camposValidados(event){
  event.preventDefault();
   if (
    campoRequerido(document.getElementById("nombre")) &&
    campoRequerido(document.getElementById("apellido")) &&
    validarMail(document.getElementById("mail")) &&
    numeroRequerido(document.getElementById("numContacto")) &&
    consultaRequerida(document.getElementById("consulta")) &&
    terminosRequeridos()
  ){
    enviarConsulta();
  }
  else{
    
  }
}
function enviarConsulta() {
  emailjs.send("service_nc6s2ua","template_2hgp0pb",{
from_name: `${document.getElementById('nombre').value} ${document.getElementById('apellido').value}`,
to_name: "Steam Team",
Email: `Correo Electronico: ${document.getElementById('mail').value}` ,
Contacto:`Numero de Contacto: ${document.getElementById('numContacto').value}`,
Consulta: `Consulta: ${document.getElementById('consulta').value}`,
}).then(function (response){
    console.log('response')
    document.getElementById('aviso').className = 'alert alert-success mt-3';
    document.getElementById('aviso').innerHTML= 'Su consulta fue enviada correctamente';
    limpiarFormulario();
  }, function (error){
    console.log('error')
    let alerta = document.getElementById('respuesta');
    alerta.className = 'alert alert-dangers mt-3 ';
    alerta.innerHTML = 'Ups. Ocurrio un error, intentelo nuevamente mas tarde.'
  })
}
function limpiarFormulario() {
  document.getElementById("formContacto").reset();
  document.getElementById("nombre").className = "form-control";
  document.getElementById("apellido").className = "form-control";
  document.getElementById("mail").className = "form-control";
  document.getElementById("numContacto").className = "form-control";
  document.getElementById("consulta").className = "form-control";
  document.getElementById("contador").innerHTML = "0/250";
  document.getElementById("checkTerminos").className = "form-check-input";
}