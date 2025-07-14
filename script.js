const ramos = {
  // PRIMER SEMESTRE
  "Química General y Orgánica": {
    semestre: 1,
    desbloquea: ["Farmacología General y Aplicada"]
  },
  "Biología Celular": {
    semestre: 1,
    desbloquea: ["Farmacología General y Aplicada", "Microbiología y Parasitología"]
  },
  "Introducción a la Matronería": {
    semestre: 1,
    desbloquea: ["Cuidados Médico-Quirúrgicos de Matronería I"]
  },
  "Inglés I": {
    semestre: 1,
    desbloquea: ["Inglés II"]
  },
  "Habilidades Comunicativas": {
    semestre: 1,
    desbloquea: []
  },

  // SEGUNDO SEMESTRE
  "Cuidados Médico-Quirúrgicos de Matronería I": {
    semestre: 2,
    requisitos: ["Introducción a la Matronería"],
    desbloquea: ["Cuidados Médico-Quirúrgicos de Matronería II"]
  },
  "Microbiología y Parasitología": {
    semestre: 2,
    requisitos: ["Biología Celular"],
    desbloquea: ["Cuidados Médico-Quirúrgicos de Matronería II", "Bases Perinatales y Ginecológicas"]
  },
  "Morfología General": {
    semestre: 2,
    desbloquea: ["Cuidados Médico-Quirúrgicos de Matronería II", "Bases Perinatales y Ginecológicas"]
  },
  "Salud Pública": {
    semestre: 2,
    desbloquea: ["Políticas en Salud Sexual y Reproductiva", "Bioestadística", "Neonatología, Lactancia y Gestión", "Administración y Gestión en Salud"]
  },
  "Inglés II": {
    semestre: 2,
    requisitos: ["Inglés I"],
    desbloquea: ["Inglés III"]
  },

  // TERCER SEMESTRE
  "Cuidados Médico-Quirúrgicos de Matronería II": {
    semestre: 3,
    requisitos: ["Cuidados Médico-Quirúrgicos de Matronería I", "Microbiología y Parasitología", "Morfología General"],
    desbloquea: ["Salud Sexual, Salud Reproductiva y Gestión I", "Integrador I: Cuidados Médico-Quirúrgicos de Matronería"]
  },
  "Bases Perinatales y Ginecológicas": {
    semestre: 3,
    requisitos: ["Microbiología y Parasitología", "Morfología General"],
    desbloquea: ["Matronería y Bases Fisiopatológicas de la Salud", "Integrador I: Cuidados Médico-Quirúrgicos de Matronería", "Neonatología, Lactancia y Gestión"]
  },
  "Políticas en Salud Sexual y Reproductiva": {
    semestre: 3,
    requisitos: ["Salud Pública"],
    desbloquea: ["Salud Sexual, Salud Reproductiva y Gestión I", "Educación con Enfoque Curso de Vida", "Salud Familiar y Comunitaria", "Matronería Legal y Bioética", "Neonatología, Lactancia y Gestión", "Metodología de la Investigación", "Psicología Integral y Técnicas de Entrevista Clínica", "Integrador I: Cuidados Médico-Quirúrgicos de Matronería"]
  },
  "Pensamiento Crítico": {
    semestre: 3,
    desbloquea: []
  },
  "Inglés III": {
    semestre: 3,
    requisitos: ["Inglés II"],
    desbloquea: ["Inglés IV"]
  },

  // Cuarto a Décimo semestre (por espacio no se muestra completo aquí)
  // 🛠️ Si quieres que lo complete todo, te lo entrego en un segundo bloque
};

const estadoRamos = {};

function crearMalla() {
  const container = document.getElementById("malla-container");
  const porSemestre = {};

  // Agrupar ramos por semestre
  for (const [nombre, data] of Object.entries(ramos)) {
    const s = data.semestre || 1;
    if (!porSemestre[s]) porSemestre[s] = [];
    porSemestre[s].push({ nombre, ...data });
    estadoRamos[nombre] = false;
  }

  for (const [semestre, ramos] of Object.entries(porSemestre)) {
    const col = document.createElement("div");
    col.className = "semestre";
    const h2 = document.createElement("h2");
    h2.textContent = `${semestre}° Semestre`;
    col.appendChild(h2);

    ramos.forEach(r => {
      const div = document.createElement("div");
      div.className = "ramo bloqueado";
      div.textContent = r.nombre;
      div.id = `ramo-${r.nombre}`;
      if (!r.requisitos || r.requisitos.length === 0) {
        div.classList.remove("bloqueado");
      }
      div.onclick = () => toggleRamo(r.nombre);
      col.appendChild(div);
    });

    container.appendChild(col);
  }
}

function toggleRamo(nombre) {
  const ramo = ramos[nombre];
  const div = document.getElementById(`ramo-${nombre}`);

  if (div.classList.contains("bloqueado")) return;

  estadoRamos[nombre] = !estadoRamos[nombre];
  div.classList.toggle("aprobado");

  // Intentar desbloquear ramos dependientes
  for (const [rNombre, datos] of Object.entries(ramos)) {
    if (!datos.requisitos) continue;
    const requisitosCumplidos = datos.requisitos.every(req => estadoRamos[req]);
    const rDiv = document.getElementById(`ramo-${rNombre}`);
    if (requisitosCumplidos) {
      rDiv.classList.remove("bloqueado");
    } else {
      if (!estadoRamos[rNombre]) {
        rDiv.classList.add("bloqueado");
        rDiv.classList.remove("aprobado");
      }
    }
  }
}

crearMalla();

