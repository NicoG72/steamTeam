import {Producto} from './productClass.js'

//variable global este arreglo tendra todos los productos que guardo en mi local storage
let listaProductos=[];

const modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'));

//variable booliana para guardar o agregar 
// modificarProducto = false en este caso agrego un nuevo producto
//moificarProducto = true modifico un producto


let modificarProducto = false;
let destacarProducto = false;
let btnAgredar = document.getElementById('btnAgregar');
btnAgredar.addEventListener('click', function (){
    limpiarFormulario();
    modalProducto.show();
})

leerProductoLS();

function agregarProducto (){

    //event.preventDefault();
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let publicado = document.getElementById('publicar').checked;
    let destacar = document.getElementById('destacar').checked;
    
   let nuevoproducto = new Producto (codigo, nombre, categoria, descripcion,publicado,destacar)

   listaProductos.push(nuevoproducto); 

   console.log(listaProductos);

   localStorage.setItem('listaProductoKey', JSON.stringify(listaProductos));
    limpiarFormulario();

    Swal.fire(
        'Producto agregado',
        'El Producto se cargo correctamente',
        'success'
      )

     leerProductoLS();
      modalProducto.hide();
}

function limpiarFormulario(){
    document.getElementById('formProducto').reset();
    modificarProducto = false;
}

function leerProductoLS(){
    if(localStorage.length > 0){
        let _listaProductoLS = JSON.parse(localStorage.getItem('listaProductoKey'));
        
        if(listaProductos.length === 0){
            listaProductos = _listaProductoLS;
        }
        dibujarTabla(_listaProductoLS);
    }
}

function dibujarTabla (Productos){

     //traigo el cuerpo de la tabla el padra tbody
     let tproducto = document.getElementById('tablaProductos');
     let filaProdc = "";
 
     tproducto.innerHTML = "";

   

    for(let i in Productos){
        filaProdc = `<tr>
        <th scope="row">${Productos[i].codigo}</th>
        <th>${Productos[i].nombre}</th>
        <th>${Productos[i].categoria}</th>
        <th>${Productos[i].descripcion}</th>
        <th><input type="checkbox" ${Productos[i].publicado ? 'checked' : ''} onchange="publicarProducto('${Productos[i].codigo}')" id="publicar" class="form-check-input"></th>
        <th><button><i class="fas fa-star" onclick="destacarProducto(this)"id="${Productos[i].codigo}"></i></button></th>

        <th>
          <button><i class="far fa-edit" onclick="prepararProducto(this)" id="${Productos[i].codigo}"></i></button>
          <button><i class="far fa-trash-alt" onclick="eliminarProductos(this)" id="${Productos[i].codigo}"></i></button>
          
        </th>
      </tr>`;

    tproducto.innerHTML += filaProdc;}
}

window.publicarProducto = function (codigo){

    let _listaProductoLS = JSON.parse(localStorage.getItem('listaProductoKey'));
    
    for(let i in _listaProductoLS){
        if(_listaProductoLS[i].codigo === codigo){
          _listaProductoLS[i].publicado = !_listaProductoLS[i].publicado;
            
        }
       
      }
    
      localStorage.setItem('listaProductoKey', JSON.stringify(_listaProductoLS));
      Swal.fire(
        'Producto Publicado',
        'El Producto se publico correctamente',
        'success'
      )
}

window.destacarProducto = function (boton){
  console.log("id del boton" + boton.id);
  let destacar = listaProductos.find(producto => producto.codigo === boton.id);
  console.log(destacar);


  let _listaProductoLS = JSON.parse(localStorage.getItem('listaProductoKey'));
    
    


}



//funcion eliminar producto 
window.eliminarProductos = function (boton){
    Swal.fire({
        title: '¿Está seguro que quiere eliminar el juego?',
        text: "No puede volver atras luego de este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#104452',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            let productosFiltrados = listaProductos.filter(juego => juego.codigo != boton.id);
            localStorage.setItem('listaProductoKey', JSON.stringify(productosFiltrados));
            listaProductos = productosFiltrados;
            leerProductoLS();
          Swal.fire(
            'Eliminado!',
            'El juego se eliminó correctamente',
            'success'
          )
        }
      })
}


window.prepararProducto = function (boton){

  //obtengo codigo del producto a destacar
  console.log(boton.id);

  let productoEncontrado = listaProductos.find(producto => producto.codigo === boton.id);
  console.log(productoEncontrado);

  //traigo los datos y cargo el modal
  document.getElementById('codigo').value = productoEncontrado.codigo;
  document.getElementById('nombre').value = productoEncontrado.nombre;
  document.getElementById('categoria').value= productoEncontrado.categoria;
  document.getElementById('descripcion').value = productoEncontrado.descripcion;
  document.getElementById('publicar').checked = productoEncontrado.publicar;
  document.getElementById('destacar').checked = productoEncontrado.destacar;
 
  modificarProducto = true;

  modalProducto.show();

}

window.guardarProducto = function(event){
  event.preventDefault();
  console.log("decir que funcion se va a ejecutar");

  if(modificarProducto){
    editarProducto();
  }else{
    agregarProducto();
  }
}

function editarProducto(){
  console.log('desde la funcion editar')
  //validar nuevamente los datos
  let codigo = document.getElementById('codigo').value;
  let nombre = document.getElementById('nombre').value;
  let categoria = document.getElementById('categoria').value;
  let descripcion = document.getElementById('descripcion').value;
  
  limpiarFormulario();

  for(let i in listaProductos){
    if(listaProductos[i].codigo === codigo){
      listaProductos[i].nombre = nombre;
      listaProductos[i].categoria = categoria;
      listaProductos[i].descripcion = descripcion;
    }
  }
  // guardar el arreglo modificado en el local storage
  localStorage.setItem('listaProductoKey', JSON.stringify(listaProductos));
  leerProductoLS();

  Swal.fire(
    'Producto modificado',
    'El funkopop se actualizo correctamente',
    'success'
  )
  
  modalProducto.hide();


}


