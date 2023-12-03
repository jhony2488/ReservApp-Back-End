// Função para obter horas ausentes entre 08:00 e 22:00
export function getHourAbsents(hours) {
  // Criar um conjunto de todas as horas presentes nos objetos
  const hourPresents = new Set(hours.map(obj => obj.hour));

  // Gerar um conjunto de todas as horas entre 08:00 e 22:00
  const hoursAll = new Set();
  for (let hora = 8; hora <= 22; hora++) {
    const horaFormatada = hora < 10 ? `0${hora}:00:00` : `${hora}:00:00`;
    hoursAll.add(horaFormatada);
  }

  // Calcular horas ausentes
  const hoursAbsents = [...hoursAll].filter(hora => !hourPresents.has(hora));

  return  hoursAbsents;
}
