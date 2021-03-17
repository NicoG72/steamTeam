import {Usuario} from "./clases.js";

let listaUsuarios = [];
const modalUsuario = new bootstrap.Modal(document.getElementById("modalUsuario"));
leerDatosLS();

let btnRegistro = document.getElementById("btnRegistro");
btnRegistro.addEventListener("click", function(){
    limpiarFormUsuario();
    
})



window.validarEmail = function(email){
    console.log(email);
    let expresion = /\w+@\w+\.[a-z]{2,}$/ 
    if(email.value.trim() != "" && expresion.test(email.value)){
        email.className="form-control is-valid";
        return true;
    }else{
        email.className="form-control is-invalid";
        return false;
    }
   
}

// function validarUsuarioUnico(){
    
//     let nombreUsuario = document.getElementById("nombreUsuario").value;
//     let emailUsuario = document.getElementById("emailUsuario").value;

//     for(let i in listaUsuarios){
//         if(listaUsuarios[i].usuario != nombreUsuario && listaUsuarios[i].email != emailUsuario){
//             console.log("usuario unico");
//           return true;
//       }else{
//           console.log("usuario existente");
//           return false;
//       }
// }
// }


//falta verificar que el usuario no exista, verificar con arreglo de localStorage
window.validarNombreUsuario = function (usuario){
    console.log("desde la funcion validar usuario");
    if(usuario.value.trim()!=""){
        usuario.className="form-control is-valid";
        return true;
    }else{
        usuario.className="form-control is-invalid";
        return false;
    } 
    }



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

function validarNuevoUsuario(){
    if(validarEmail(document.getElementById("emailUsuario"))===true && validarNombreUsuario(document.getElementById("nombreUsuario"))===true && validarPassword(document.getElementById("passUsuario"))===true){
        console.log("nuevo usuario correcto");
        return true;
    } else{console.log("usuario incorrecto");
return false;}
}

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

function leerDatosLS(){
    if(localStorage.length >0){
        let _listaUsuarios= JSON.parse(localStorage.getItem("listaUsuariosKey")); //lista traida de local storage, pongo _ para diferenciar.
        // con JSON.parse convierto formato JSON a formato normal de javascript
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
}