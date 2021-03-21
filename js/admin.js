import {Producto} from './productClass.js'

//variable global este arreglo tendra todos los productos que guardo en mi local storage
let listaProductos=[];

leerProductoLS();

const modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'));

let btnAgredar = document.getElementById('btnAgregar');
btnAgredar.addEventListener('click', function (){
    limpiarFormulario();
    modalProducto.show();
})



window.agregarProducto = function(event){

    event.preventDefault();
    

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombreProducto').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let destacar = document.getElementById('checkDestacar').checked;
    let publicado = document.getElementById('checkPublicar').checked;



   let nuevoproducto = new Producto (codigo, nombre, categoria, descripcion,destacar,publicado)
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
}

function leerProductoLS(){
    if(localStorage.getItem('listaProductoKey')){
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
        <th><input type="checkbox" ${Productos[i].publicado ? 'checked' : ''} onchange="publicarProducto('${Productos[i].codigo}')" id="checkPublicar" class="form-check-input"></th>
        <th><button><i class="far fa-star"></i></button></th>

        <th>
          <button><i class="far fa-edit"></i></button>
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
}


function Destacar(){

    let btnDestacar = document.getElementById('checkDestacar').checked;

    if(btnDestacar == true){
        btnDestacar= `<i class="fas fa-star"></i>`
    }
    else{
        btnDestacar = `<button><i class="far fa-star"></i></button>`
    }
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