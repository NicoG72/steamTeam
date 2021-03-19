import { Usuario } from "./clases.js";

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
  if (    validarUsuario(document.getElementById('usuario')) &&
    validarPassword(document.getElementById('password')) &&
    document.getElementById("usuario").value === usuarioAdmin.usuario && document.getElementById("password").value === usuarioAdmin.password
    ){
      document.getElementById("navAdmin").className = "nav-item ";

      location.href="admin.html";
      

      // habilitar en el nav el link "admin"

      //habilitar span de user

      //ingresar como user admin

  }else{
    console.log("") 
    
  }
}

