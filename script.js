const listaModelos = document.getElementById("modelos");

fetch("models.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    // Convertir el objeto en un array
    const modelosArray = Object.values(data);

    //Por cada modelo del array, crear un elemento de lista con el nombre
    for (const modelo of modelosArray) {
      const modeloNuevo = document.createElement("div");
      modeloNuevo.classList.add("container-fluid", "px-4", "modelo-auto");
      modeloNuevo.innerHTML = generarModelo(modelo);
      listaModelos.appendChild(modeloNuevo);
    }
  });

function generarModelo(modelo) {
  return `<div class="container">
      <div class="row py-3 ">
        <div class="col-md-8 d-flex flex-column align-items-center justify-content-center">
            <h3>${modelo.modelo}</h3>
            <p class="d-none d-sm-inline">${modelo.resumen}</p>
            <button class="btn fs-6" onclick = "elegirModelo('${modelo.modelo}')">Ver ${modelo.modelo}</button>
        </div>
        <div class="col-md-4 px-0 py-2">
        <img src="${modelo.imagenes[0]}" alt="${modelo.modelo}" width="100%">
        </div>
  </div>
    `;
}

function elegirModelo(modeloNombre) {
  localStorage.setItem("modeloElegido", modeloNombre);
  console.log(localStorage.getItem("modeloElegido"));
  window.location.href = "detalle.html";
}
