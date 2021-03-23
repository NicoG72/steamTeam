leerInventario();

function leerInventario(){
    if(localStorage.getItem("listaProductosKey")){
        listaProductos =JSON.parse(localStorage.getItem("listaProductosKey"));
    //traer el padre
    let articlePadre = document.getElementById("listaProductos");
    //limpio el contenido de article padre para asegurarme que no hay nada
    articlePadre.innerHTML = "";
    
    console.log(listaProductos);
    
    //crear columnas
    for(let i in listaProductos){
        //variable que almacene el html de la columna
        //
        let imagen =""; 
        if(listaProductos[i].imagen===""){
        //agregar una imagen por defecto
            imagen = "imagenPorDefecto.png"
    
        }else{
            //mostrar la imagen que cargue en el objeto
        imagen= listaProductos[i].imagen
        }

        let destacado =` <div class="row">
        <div class="col-sm-12 col-md-6 my-4"><img src="img/inicio/${imagen}" class="w-100 h-100" alt="${listaProductos[i].nombre}"></div>
        <div class="col-sm-12 col-md-6 my-4">
          <iframe class="w-100 h-100"
          width="560"
          height="360"
          src="https://www.youtube.com/embed/QkkoHAzjnUs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
       </div>
      </div>
      <div>
     <h2 class="my-5 text-start" >${listaProductos[i].nombre}</h2>
     <h4 class="my-5 text-start"">Categoria: ${listaProductos[i].categoria}</h4>
     <p class="text-start">
     ${listaProductos[i].descripcion}
     </p>
     <div class="text-start">
       <button class="btn btn-primary"><a href="error404.html" class="text-light">Comprar</a></button>
     </div>
      </div>`;   
    //agregar la columna a su elemento padre
    articlePadre.innerHTML = destacado; 
    }

     
    }
}
