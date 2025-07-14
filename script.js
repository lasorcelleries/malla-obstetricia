const estados = {}; // Guarda qué ramos están aprobados

function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  malla.forEach(semestre => {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";

    const titulo = document.createElement("h3");
    titulo.textContent = semestre.semestre;
    semestreDiv.appendChild(titulo);

    semestre.ramos.forEach(ramo => {
      const ramoDiv = document.createElement("div");
      ramoDiv.className = "ramo";
      ramoDiv.textContent = ramo.nombre;
      ramoDiv.dataset.id = ramo.id;

      // El ramo se desbloquea solo si TODOS sus requisitos están aprobados
      const requisitosCumplidos = ramo.requisitos.every(req => estados[req] === true);

      if (!requisitosCumplidos) {
        ramoDiv.classList.add("bloqueado");
      }

      if (estados[ramo.id]) {
        ramoDiv.classList.add("aprobado");
      }

      ramoDiv.onclick = () => {
        if (!requisitosCumplidos) return; // No hace nada si está bloqueado
        estados[ramo.id] = !estados[ramo.id]; // Alterna aprobado/no aprobado
        renderMalla();
      };

      semestreDiv.appendChild(ramoDiv);
    });

    container.appendChild(semestreDiv);
  });
}

// Inicializa el renderizado
renderMalla();
