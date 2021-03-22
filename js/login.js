import { Usuario } from "./clases.js";
import{listaUsuarios} from "./validacionesAltaUsuario.js"
// import{cargarUsuario} from "./usuarioLogueado"

//creo usuario admin
let usuarioAdmin = new Usuario("proyectsteam@gmail.com", "admin", "admin123");
console.log(usuarioAdmin);

window.validarUsuario =function (input){
    if (input.value.trim() === "") {
    input.className = "form-control is-invalid";
    return false;
  } else {
    input.className = "form-control is-valid";
    return true;
  }
}
window.validarPassword=function (pass){
  if (pass.value.trim() != "" && pass.value.length >= 6) {
    pass.className = "form-control is-valid";
    return true;
  } else {
    pass.className = "form-control is-invalid";
    return false;
  }
}


window.validacionLogin= function (event){
  event.preventDefault();
  
  if (validarUsuario(document.getElementById('usuario'))===true &&
    validarPassword(document.getElementById('password'))===true
    // document.getElementById("usuario").value === usuarioAdmin.usuario && document.getElementById("password").value === usuarioAdmin.password
    ){
      let usuarioLogueado = listaUsuarios.find((usuario)=>usuario.usuario ===document.getElementById("usuario").value  && usuario.password===document.getElementById("password").value);
      if(usuarioLogueado && document.getElementById("usuario").value ==="admin"){
        localStorage.setItem("usuariologueado", JSON.stringify(document.getElementById("usuario").value));
        location.href="admin.html"
  console.log("logueando admin");

       }else if(usuarioLogueado && document.getElementById("usuario").value !="admin"){
        localStorage.setItem("usuariologueado", JSON.stringify(document.getElementById("usuario").value));
        location.href="index.html"
        console.log("logueando usuario");
      }
      
    }
    
  }

  
//  export function cerrarSesion(){
//   localStorage.removeItem("usuariologueado");
//   location.href="index.html"
//   document.getElementById("navLogin").className="nav-item";
//   document.getElementById("cerrarSesion").className="nav-item d-none";
//   document.getElementById("user").className="nav-item d-none"
//   console.log("sesion cerrada");
// }





  // }else if(validarUsuario(document.getElementById('usuario'))===true && validarPassword(document.getElementById('password'))===true && controlUsuarios()===true 
  // ){
  //   document.getElementById("navUsuario").className = "nav-item";

  //   // location.href="admin.html";
    
  // }else if(document.getElementById("password").value != usuarioAdmin.password){
  //   console.log("password incorrecto");
  //   document.getElementById("password").className="form-control is-invalid"
  //   document.getElementById("feedbackPassword").innerHTML = "password incorrecto"
  // }
    
 

