const estados = {};

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  malla.forEach(semestre => {
    const semDiv = document.createElement("div");
    semDiv.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = semestre.semestre;
    semDiv.appendChild(titulo);

    semestre.ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.dataset.id = ramo.id;

      if (!ramo.requisitos.every(r => estados[r])) {
        div.classList.add("bloqueado");
      }

      if (estados[ramo.id]) {
        div.classList.add("aprobado");
      }

      div.onclick = () => aprobarRamo(ramo);
      semDiv.appendChild(div);
    });

    container.appendChild(semDiv);
  });
}

function aprobarRamo(ramo) {
  if (!ramo.requisitos.every(r => estados[r])) return;

  estados[ramo.id] = !estados[ramo.id]; // toggle estado
  renderMalla();
}

renderMalla();
