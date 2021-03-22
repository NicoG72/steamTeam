import { Producto } from "./productClass.js";

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
                        src="img/inicio/fifa_20.png"
                        class="w-100"
                        alt="${listaJuego[i].descripcion}"
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
