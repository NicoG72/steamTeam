import {Producto} from './productClass.js'

//variable global este arreglo tendra todos los productos que guardo en mi local storage
let listaProductos = [];

//funcion anonima
window.agregarProducto = function(event){
    event.preventDefault();


    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombreProducto').value;
    let categoria = document.getElementById('categoria').value;
    let destacar = document.getElementById('checkDestacar').value;
    let publicar = document.getElementById('checkPublicar').value;

    let nuevoProducto = new Producto (codigo, nombre, categoria, destacar, publicar);
   
    listaProductos.push(nuevoProducto);
   
    console.log(nuevoProducto)
    
}
