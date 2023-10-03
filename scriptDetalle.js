const detalleModelo = document.getElementById("detalle-modelo");
const modeloElegido = localStorage.getItem("modeloElegido");

addEventListener("load", function () {});

fetch("models.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    // Convertir el objeto en un array
    const modelosArray = Object.values(data);

    console.log(modelosArray);

    const modeloADetallar = modelosArray.find(
      (item) => item.modelo === modeloElegido
    );

    const modeloDetallado = document.createElement("div");
    modeloDetallado.classList.add("container-fluid");
    modeloDetallado.innerHTML = detallarModelo(modeloADetallar);
    detalleModelo.appendChild(modeloDetallado);

    console.log(modeloADetallar);
  });

function detallarModelo(modeloADetallar) {
  return `<div class="row">
  <div id="carousel">
    <div class="col">
      <div
        id="carouselExample"
        data-bs-ride="carousel"
        class="carousel"
      >
        <div class="carousel-inner w-100 h-75" id="carousel">
          <div class="carousel-item active" data-bs-interval="4000">
            <img
              src="${modeloADetallar.imagenes[0]}"
              class="d-block w-100"
              alt="${modeloADetallar.modelo}"
            />
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img
              src="${modeloADetallar.imagenes[1]}"
              class="d-block w-100"
              alt="${modeloADetallar.modelo}"
            />
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img
              src="${modeloADetallar.imagenes[2]}"
              class="d-block w-100"
              alt="${modeloADetallar.modelo}"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>

<div class="container mt-3">
    <div class="row">
        <h1>${modeloADetallar.modelo}</h1>
    </div>
    
    <div class="row">
        <p>${modeloADetallar.detalle1}</p>
        <p>${modeloADetallar.detalle2}</p>
        <P>${modeloADetallar.detalle3}</P>
    </div>
    
    <div class="row d-flex justify-content-center mb-3" id="caracteristicas">
        <div class="col-12 col-md-6 col-lg-3 categoria">
            <p>Lanzamiento</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <p>${modeloADetallar.lanzamiento}</p>
        </div>
    
        <div class="col-12 col-md-6 col-lg-3 categoria">
            <p>Precio</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <p>${modeloADetallar.precio}</p>
        </div>
    
        <div class="col-12 col-md-6 col-lg-3 categoria">
            <p>Motorización</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <p>${modeloADetallar.motor}</p>
        </div>
    
        <div class="col-12 col-md-6 col-lg-3 categoria">
            <p>Potencia</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <p>${modeloADetallar.potencia}</p>
        </div>
    
        <div class="col-12 col-md-6 col-lg-3 categoria">
        <p>Aceleración (0-100km/h)</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <p>${modeloADetallar.accel}</p>
        </div>
    
        <div class="col-12 col-md-6 col-lg-3 categoria">
        <p>Velocidad máxima</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
            <p>${modeloADetallar.velocidadMax}</p>
        </div>
</div>
`;
  detalleModelo.appendChild(detallarModelo);
}
// TODO: Armar función para que el carrusel tenga tantas imagenes como tenga el modelo de coche
// function generarImagen(modeloADetallar) {
//   for (const imagen of modeloADetallar.imagenes) {
//     return `<img src="${imagen}" alt="${modeloADetallar.modelo}" width="100%">`;
//   }
// }
