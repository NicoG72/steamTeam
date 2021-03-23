import { Producto } from "./productClass.js";

cargarJuego();

window.juegoDestacado = function (event) {
  let listaJuego = JSON.parse(localStorage.getItem("listaProductoKey"));
  console.log(listaJuego);

  if (listaJuego.length > 0) {
    for (let i in listaJuego) {
      if (listaJuego[i].destacar === true) {
        let destacado = document.getElementById("juegoDestacado");
        destacado.innerHTML = `<section class="mt-5" id="juegoDestacado">
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-8">
                      <img
                        src="img/inicio/${listaJuego[i].imagen}"
                        class="w-100"
                        alt="${listaJuego[i].nombre}"
                      />
                    </div>
                    <div class="col-md-4 bg-dark d-flex align-items-center">
                      <div class="card-body">
                        <h5 class="card-title mt-3">${listaJuego[i].nombre}</h5>
                        <p class="card-text mt-3">${listaJuego[i].categoria}</p>
                        <p class="card-text">
                          ${listaJuego[i].descripcion}
                        </p>
                        <div>
                          <button class="btn btn-primary">
                            <a class="estilo text-light" href="detalleJuego.html"
                              >Ver mas...</a
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>`;
      }
    }
  }
};

  function cargarJuego (){
  console.log("Cargar Juego");
  let fila = "";
  let listaJuegos = JSON.parse(localStorage.getItem('listaProductoKey'));
  console.log(listaJuegos);
  let padre = document.getElementById('padre');
  padre.innerHTML = "";
  console.log(padre);
  let padre2 = document.getElementById('padre2');
  padre2.innerHTML = "";
  let padreAventuras = document.getElementById('padreAventuras');
  padreAventuras.innerHTML = "";
  let padreAventuras2 = document.getElementById('padreAventuras2');
  padreAventuras2.innerHTML = "";
  let padreEstrategia = document.getElementById('padreEstrategia');
  padreEstrategia.innerHTML = "";
  let padreEstrategia2 = document.getElementById('padreEstrategia2');
  padreEstrategia2.innerHTML = "";
  let padreInfantiles = document.getElementById('padreInfantiles');
  padreInfantiles.innerHTML = "";
  let padreInfantiles2 = document.getElementById('padreInfantiles2');
  padreInfantiles2.innerHTML = "";
  if(listaJuegos.length > 0){
    let contador = 0;
      let contador1 = 0;
      let contador2 = 0;
      let contador3 = 0;
    for(let i in listaJuegos){
      if(listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'deportes' && contador < 4){
        contador ++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="detalleJuego.html"
        id="${listaJuegos[i].codigo}"
        onclick="pasarId(this)"
          ><img
            src="img/inicio/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padre.innerHTML += fila;
      }else if(listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'deportes' && contador >= 4){
        contador ++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="detalleJuego.html"
        id="${listaJuegos[i].codigo}"
        onclick="pasarId(this)"
          ><img
            src="img/inicio/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padre2.innerHTML += fila;
      }else if(listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'aventuras' && contador1 < 4){
        contador1 ++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="detalleJuego.html"
        id="${listaJuegos[i].codigo}"
        onclick="pasarId(this)"
          ><img
            src="img/inicio/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreAventuras.innerHTML += fila;
      }else if(listaJuegos[i].publicado == true && listaJuegos[i].categoria =='aventuras' && contador1 >= 4){
        contador1 ++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="detalleJuego.html"
        id="${listaJuegos[i].codigo}"
        onclick="pasarId(this)"
          ><img
            src="img/inicio/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreAventuras2.innerHTML += fila;
      }else if(listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'estrategia' && contador2 < 4){
        contador2 ++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="detalleJuego.html"
        id="${listaJuegos[i].codigo}"
        onclick="pasarId(this)"
          ><img
            src="img/inicio/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreEstrategia.innerHTML += fila;
      }else if(listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'estrategia' && contador2 >= 4){
        contador2 ++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="detalleJuego.html"
        id="${listaJuegos[i].codigo}"
        onclick="pasarId(this)"
          ><img
            src="img/inicio/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreEstrategia2.innerHTML += fila;
      }else if(listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'infantiles' && contador3 < 4){
        contador3 ++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="detalleJuego.html"
        id="${listaJuegos[i].codigo}"
        onclick="pasarId(this)"
          ><img
            src="img/inicio/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreInfantiles.innerHTML += fila;
      }else if(listaJuegos[i].publicado == true && listaJuegos[i].categoria == 'infantiles' && contador >= 4){
        contador3 ++;
        fila = `
        <div class="col-sm-3 my-2 responsive">
        <a href="detalleJuego.html"
        id="${listaJuegos[i].codigo}"
        onclick="pasarId(this)"
          ><img
            src="img/inicio/${listaJuegos[i].imagen}"
            class="w-100"
            alt="${listaJuegos[i].nombre}"
        /></a>
        </div>`;
        padreInfantiles2.innerHTML += fila;
      }
      
    }
  }
}


