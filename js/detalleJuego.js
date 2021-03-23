// let identificador;
// window.cargarDetalle = function (identificador) {
//   console.log(identificador);
//   let tablaProductos = JSON.parse(localStorage.getItem("listaProductoKey"));
//   for (let i in tablaProductos) {
//     if (tablaProductos[i].codigo == 'identificador') {
//       console.log("desde el if del identificador");
//       let imagen = document.getElementById("imagenDetalle");
//       imagen.innerHTML = "";
//       imagen.innerHTML = ` <h1 class="my-5">Conocé tu juego</h1>
//       <img src="img/inicio/${tablaProducto[i].imagen}" alt="${tablaProducto[i].nombre}">
//       <h2 class="mt-5">${tablaProducto[i].nombre}</h2>
//       <h3 class="mb-5">${tablaProducto[i].categoria}</h3>
//       <p>
//         ${tablaProducto[i].descripcion}
//       </p>
//       <button class="btn btn-primary"><a href="error404.html" class="text-light">Comprar</a></button>`;
//     }
//   }
// };
window.pasarId = function (boton) {
  console.log(boton.id);
  let tablaProductos = JSON.parse(localStorage.getItem("listaProductoKey"));
  for (let i in tablaProductos) {
    if (tablaProductos[i].codigo == boton.id) {
      console.log("desde el if del identificador");
      let imagen = document.getElementById("imagenDetalle");
      imagen.innerHTML = "";
      imagen.innerHTML = ` <h1 class="my-5">Conocé tu juego</h1>
      <img src="img/inicio/${tablaProductos[i].imagen}" alt="${tablaProductos[i].nombre}">
      <h2 class="mt-5">${tablaProductos[i].nombre}</h2>
      <h3 class="mb-5">${tablaProductos[i].categoria}</h3>
      <p>
        ${tablaProductos[i].descripcion}
      </p>
      <button class="btn btn-primary"><a href="error404.html" class="text-light">Comprar</a></button>`;
    }
}
}
