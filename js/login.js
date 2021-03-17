function validarUsuario(input){
    if (input.value.trim() === "") {
    input.className = "form-control is-invalid";
    return false;
  } else {
    input.className = "form-control is-valid";
    return true;
  }
}
function validarPassword(pass){
  if (pass.value.trim() != "" && pass.value.length >= 6) {
    pass.className = "form-control is-valid";
    return true;
  } else {
    pass.className = "form-control is-invalid";
    return false;
  }
}
function validacionLogin(event){
  event.preventDefault();
  if (    validarUsuario(document.getElementById('usuario')) &&
    validarPassword(document.getElementById('password')) 
    ){
      //validar que el usuario sea admin

      // habilitar en el nav el link "admin"

      //habilitar span de user

      //ingresar como user admin

  }else{
    //ingresar como user comun 
    
  }
}