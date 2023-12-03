export function somarHours(baseHour, hourASomar) {
  // Converter as strings de hora para objetos Date
  const baseTime = new Date(`1970-01-01T${baseHour}`);
  const horasToAdd = new Date(`1970-01-01T${hourASomar}`);

  // Adicionar as horas
  baseTime.setHours(baseTime.getHours() + horasToAdd.getHours());
  baseTime.setMinutes(baseTime.getMinutes() + horasToAdd.getMinutes());
  baseTime.setSeconds(baseTime.getSeconds() + horasToAdd.getSeconds());

  // Formatando a hora resultante
  const result = baseTime.toTimeString().split(' ')[0];

  return result;
}

export function subtrairHours(baseHour, hourASomar) {
  // Converter as strings de hora para objetos Date
  const baseTime = new Date(`1970-01-01T${baseHour}`);
  const horasToAdd = new Date(`1970-01-01T${hourASomar}`);

  // Adicionar as horas
  baseTime.setHours(baseTime.getHours() - horasToAdd.getHours());
  baseTime.setMinutes(baseTime.getMinutes() - horasToAdd.getMinutes());
  baseTime.setSeconds(baseTime.getSeconds() - horasToAdd.getSeconds());

  // Formatando a hora resultante
  const result = baseTime.toTimeString().split(' ')[0];

  return result;
}
