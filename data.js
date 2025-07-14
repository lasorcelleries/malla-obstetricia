const malla = [
  {
    semestre: "1° Semestre",
    ramos: [
      { nombre: "Química General y Orgánica", id: "qgo", requisitos: [], abre: ["farmacologia"] },
      { nombre: "Biología Celular", id: "biocel", requisitos: [], abre: ["farmacologia", "micro"] },
      { nombre: "Introducción a la Matronería", id: "intro_mat", requisitos: [], abre: ["cmq1"] },
      { nombre: "Inglés I", id: "ingles1", requisitos: [], abre: ["ingles2"] },
      { nombre: "Habilidades Comunicativas", id: "habilidades", requisitos: [], abre: [] }
    ]
  },
  {
    semestre: "2° Semestre",
    ramos: [
      { nombre: "Cuidados Médico-Quirúrgicos de Matronería I", id: "cmq1", requisitos: ["intro_mat"], abre: ["cmq2"] },
      { nombre: "Microbiología y Parasitología", id: "micro", requisitos: ["biocel"], abre: ["cmq2", "bpg"] },
      { nombre: "Morfología General", id: "morfo", requisitos: [], abre: ["cmq2", "bpg"] },
      { nombre: "Salud Pública", id: "salud_pub", requisitos: [], abre: ["politicas", "bioest", "neo", "admin"] },
      { nombre: "Inglés II", id: "ingles2", requisitos: ["ingles1"], abre: ["ingles3"] }
    ]
  },
  {
    semestre: "3° Semestre",
    ramos: [
      { nombre: "Cuidados Médico-Quirúrgicos de Matronería II", id: "cmq2", requisitos: ["cmq1", "micro", "morfo"], abre: ["sssr1", "integ1"] },
      { nombre: "Bases Perinatales y Ginecológicas", id: "bpg", requisitos: ["micro", "morfo"], abre: ["matroneria_fisio", "integ1", "neo"] },
      { nombre: "Políticas en Salud Sexual y Reproductiva", id: "politicas", requisitos: ["salud_pub"], abre: ["sssr1", "educacion", "sfyc", "legal", "metodologia", "psico", "integ1"] },
      { nombre: "Pensamiento Crítico", id: "pc", requisitos: [], abre: [] },
      { nombre: "Inglés III", id: "ingles3", requisitos: ["ingles2"], abre: ["ingles4"] }
    ]
  },
  {
    semestre: "4° Semestre",
    ramos: [
      { nombre: "Matronería y Bases Fisiopatológicas de la Salud", id: "matroneria_fisio", requisitos: ["bpg"], abre: ["sssr2", "legal"] },
      { nombre: "Salud Sexual, Salud Reproductiva y Gestión I", id: "sssr1", requisitos: ["cmq2", "politicas"], abre: ["sssr2", "educacion", "sfyc"] },
      { nombre: "Administración y Gestión en Salud", id: "admin", requisitos: ["salud_pub"], abre: ["neo", "bioest"] },
      { nombre: "Integrador I: Cuidados Médico-Quirúrgicos", id: "integ1", requisitos: ["cmq2", "bpg", "politicas"], abre: [] },
      { nombre: "Inglés IV", id: "ingles4", requisitos: ["ingles3"], abre: [] }
    ]
  },
  {
    semestre: "5° Semestre",
    ramos: [
      { nombre: "Salud Sexual, Salud Reproductiva y Gestión II", id: "sssr2", requisitos: ["sssr1", "matroneria_fisio"], abre: ["sexologia", "matro_path"] },
      { nombre: "Farmacología General y Aplicada", id: "farmacologia", requisitos: ["qgo", "biocel"], abre: ["matro_path"] },
      { nombre: "Neonatología, Lactancia y Gestión", id: "neo", requisitos: ["bpg", "salud_pub", "admin"], abre: ["educacion", "sfyc", "matro_path"] },
      { nombre: "Psicología Integral y Técnicas de Entrevista Clínica", id: "psico", requisitos: ["politicas"], abre: ["intervencion"] }
    ]
  },
  {
    semestre: "6° Semestre",
    ramos: [
      { nombre: "Educación con Enfoque Curso de Vida", id: "educacion", requisitos: ["sssr1", "neo", "politicas"], abre: ["imagenologia", "integ2", "onco"] },
      { nombre: "Salud Familiar y Comunitaria", id: "sfyc", requisitos: ["sssr1", "neo", "politicas"], abre: ["intervencion"] },
      { nombre: "Bioestadística", id: "bioest", requisitos: ["salud_pub", "admin"], abre: ["metodologia"] },
      { nombre: "Matronería Patológica Integrada y Gestión", id: "matro_path", requisitos: ["sssr2", "farmacologia", "neo"], abre: ["imagenologia", "integ2", "onco"] }
    ]
  },
  {
    semestre: "7° Semestre",
    ramos: [
      { nombre: "Sexología, Género y Derecho", id: "sexologia", requisitos: ["sssr2"], abre: ["imagenologia", "integ2", "onco"] },
      { nombre: "Matronería Legal y Bioética", id: "legal", requisitos: ["matroneria_fisio", "politicas"], abre: ["imagenologia", "integ2", "onco"] },
      { nombre: "Intervención en Contextos Sociales y Comunitarios", id: "intervencion", requisitos: ["psico", "sfyc"], abre: ["imagenologia", "integ2", "onco"] },
      { nombre: "Metodología de la Investigación", id: "metodologia", requisitos: ["bioest", "politicas"], abre: ["imagenologia", "integ2", "onco", "proyecto"] }
    ]
  },
  {
    semestre: "8° Semestre",
    ramos: [
      { nombre: "Imagenología en Matronería", id: "imagenologia", requisitos: ["educacion", "matro_path", "sexologia", "legal", "intervencion", "metodologia"], abre: ["habilitacion1", "habilitacion2"] },
      { nombre: "Integrador II: Práctica de Matronería en la Comunidad", id: "integ2", requisitos: ["educacion", "matro_path", "sexologia", "legal", "intervencion", "metodologia"], abre: ["habilitacion1", "habilitacion2"] },
      { nombre: "Matronería Oncológica y Reproducción Asistida", id: "onco", requisitos: ["educacion", "matro_path", "sexologia", "legal", "intervencion", "metodologia"], abre: ["habilitacion1", "habilitacion2"] },
      { nombre: "Proyecto de Matronería", id: "proyecto", requisitos: ["metodologia"], abre: ["habilitacion1", "habilitacion2"] }
    ]
  },
  {
    semestre: "9° y 10° Semestre",
    ramos: [
      { nombre: "Habilitación Profesional I", id: "habilitacion1", requisitos: ["imagenologia", "integ2", "onco", "proyecto"], abre: [] },
      { nombre: "Habilitación Profesional II", id: "habilitacion2", requisitos: ["imagenologia", "integ2", "onco", "proyecto"], abre: [] }
    ]
  }
];
