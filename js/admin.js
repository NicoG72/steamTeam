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



   let nuevoproducto = new Producto (codigo, nombre, categoria, descripcion)
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
    console.log(Productos);

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
        <th>${Productos[i].checkDestacar}</th>

        
        <th>
          <button><i class="far fa-edit"></i></button>
          <button><i class="far fa-trash-alt"></i></button>
          <button><i class="far fa-star"></i></button>
        </th>
      </tr>`;

    tproducto.innerHTML += filaProdc;}
}
