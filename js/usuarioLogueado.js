
//  import{cerrarSesion}from "./login.js"


export function cargarUsuario(){
    const usuario = JSON.parse(localStorage.getItem("usuariologueado"));
    if(usuario==="admin"){
        document.getElementById("navLogin").className="nav-item d-none"
        document.getElementById("navAdmin").className = "nav-item";
        document.getElementById("cerrarSesion").className="nav-item"
        console.log("desde usuario admin")
    }else if(usuario!="admin" && usuario!=""){
        console.log("desde otro usuario")
        document.getElementById("user").className="nav-item"
        document.getElementById("nombreUser").innerHTML=usuario
        document.getElementById("cerrarSesion").className ="nav-item"
        document.getElementById("navAdmin").className = "nav-item d-none";
        document.getElementById("navLogin").className="nav-item d-none"
    }else{
        console.log("por favor haga login")
        document.getElementById("navLogin").className="nav-item";
         document.getElementById("navAdmin").className="nav-item d-none";
          document.getElementById("cerrarSesion").className ="nav-item d-none"
          document.getElementById("user").className="nav-item d-none"
    }
}


cargarUsuario();    


// let sesion = document.getElementById("cerrarS");
// sesion.addEventListener("click", cerrarSesion);

// window.cerrarSesion = function(){
//     localStorage.removeItem("usuariologueado");
//     location.href="index.html"
//     document.getElementById("navLogin").className="nav-item";
//     document.getElementById("navAdmin").className="nav-item d-none";
//     document.getElementById("cerrarSesion").className ="nav-item d-none"
//     document.getElementById("user").className="nav-item d-none"
//   }
  
  
  