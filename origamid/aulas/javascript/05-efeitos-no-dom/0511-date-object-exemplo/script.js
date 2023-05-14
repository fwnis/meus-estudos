const agora = new Date();
console.log(agora);

// Semana Mês Dia Ano HH:MM:SS GMT
agora.getDate(); // Dia
agora.getDay(); // Dia da Semana ex: 5 = Fri
agora.getMonth(); // Número dia mês
agora.getFullYear(); // Ano
agora.getHours(); // Hora
agora.getMinutes(); // Minutos
agora.getTime(); // ms desde 1970
agora.getUTCHours() - 3; // Brasília

const futuro = new Date("Dec 31 2023 23:59");
console.log(futuro);

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

console.log(diasFuturo - diasAgora);
