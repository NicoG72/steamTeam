import {Usuario} from "./clases.js";

//creo el arreglo para almacenar usuasrios
export let listaUsuarios = [];

//defino ventana modal
const modalUsuario = new bootstrap.Modal(document.querySelector("#modalUsuario"));
leerDatosLS();


//llamo a la funcion limpiar formulario desde el link de registro
let linkRegistro = document.getElementById("linkRegistro");
linkRegistro.addEventListener("click", function(){
    limpiarFormUsuario();
})

//valido email
window.validarEmail = function(email){
    console.log("desde la funcion validar email");
    let expresion = /\w+@\w+\.[a-z]{2,}$/; 
        if(email.value.trim() != "" && expresion.test(email.value)){
            console.log(email);
            email.className ="form-control is-valid";
          return true;
      }else{
        console.log("email invalido");
        email.className= "form-control is-invalid"
        return false;
  }};

  //valido nombre de usuario
  window.validarNombreUsuario = function (usuario){
    console.log("desde la funcion validar usuario");
        if(usuario.value.trim() !=""){
            console.log(usuario);
            usuario.className ="form-control is-valid";
          return true;
      }else{
        console.log("usuario invalido");
        usuario.className= "form-control is-invalid"
        return false;
  }};


//valido contraseña
window.validarPassword = function (pass){
    console.log(pass);
    let expresion = /[a-z]+[0-9]/;
    if(pass.value.trim()!="" && expresion.test(pass.value)){
        pass.className="form-control is-valid";
        return true;
    }else{
        pass.className="form-control is-invalid";
        return false;
    }
}

function usuarioUnico(){
    let usuario = document.getElementById("nombreUsuario").value;
    let email = document.getElementById("emailUsuario").value;
    let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuariosKey"))
    for(let i in listaUsuarios){
        console.log(listaUsuarios[i])
            if(listaUsuarios[i].usuario != usuario && listaUsuarios[i].email != email){
                console.log("usuario unico");
        
                document.getElementById("nombreUsuario").className="form-control is-valid";
                document.getElementById("emailUsuario").className="form-control is-valid";
        
                return true;         
             }else if(listaUsuarios[i].email === email){
                 console.log("email existente");
        
                 document.getElementById("feedbackEmail").innerHTML ="El email utilizado ya esta registrado.";
                 document.getElementById("emailUsuario").className="form-control is-invalid";  
        
                 return false;
            }else if(listaUsuarios[i].usuario === usuario){
                console.log("usuario existente");
        
                document.getElementById("feedbackUsuario").innerHTML ="El usuario utilizado ya esta registrado.";
                document.getElementById("nombreUsuario").className="form-control is-invalid";  
                
                return false;
            }   
        }
    
}   

//creo la funcion validar general el nuevo usuasrio
function validarNuevoUsuario(){

    if(validarEmail(document.getElementById("emailUsuario"))===true && validarNombreUsuario(document.getElementById("nombreUsuario"))===true && validarPassword(document.getElementById("passUsuario"))===true  ){
        console.log("nuevo usuario correcto");
        return true;
    } else{console.log("usuario incorrecto");
return false;}
}

//creo nuevo usuario una vez validado correctamente todos los campos y almaceno en LS
window.crearNuevoUsuario= function (event){
    event.preventDefault();
    if(validarNuevoUsuario(document.getElementById("formUsuario")) === true){

        let email = document.getElementById("emailUsuario").value;
        let nombreUsuario = document.getElementById("nombreUsuario").value;
        let password = document.getElementById("passUsuario").value;

        let nuevoUsuario = new Usuario (email, nombreUsuario, password);
        console.log("nuevo usuario");

        listaUsuarios.push(nuevoUsuario);
        console.log(listaUsuarios);

        localStorage.setItem("listaUsuariosKey", JSON.stringify(listaUsuarios));

        Swal.fire(
            'Bienvenido',
            'Su usuario ha sido creado correctamente',
            'success'
          )
          leerDatosLS();
          limpiarFormUsuario();
          modalUsuario.hide();

    }else{console.log("nuevo usuario invalido");}
}

export function leerDatosLS(){
    if(localStorage.getItem("listaUsuariosKey")){
        let _listaUsuarios= JSON.parse(localStorage.getItem("listaUsuariosKey")); //lista traida de local storage, pongo _ para diferenciar.
        if(listaUsuarios.length===0){
            listaUsuarios = _listaUsuarios
        }
    }
}

function limpiarFormUsuario(){
    document.getElementById("formUsuario").reset();
    document.getElementById("emailUsuario").className = "form-control";
    document.getElementById("nombreUsuario").className = "form-control";
    document.getElementById("passUsuario").className = "form-control";
    document.getElementById("feedbackUsuario").innerHTML ="Debe ingresar un nombre de usuario valido.";
    document.getElementById("feedbackEmail").innerHTML ="Debe ingresar una direccion de email valido.";
};