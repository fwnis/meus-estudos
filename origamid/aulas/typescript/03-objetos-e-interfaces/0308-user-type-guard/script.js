"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isCurso(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "horas" in value &&
        "tags" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((curso) => (document.body.innerHTML += `
        <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Tags: ${curso.tags}</p>
        </div>
    `));
    }
}
