export function somarOneDay(dateString) {
  // Converte a string de data para um objeto Date
  const parterns = dateString.split('/');
  const date = new Date(`${parterns[2]}-${parterns[1]}-${parterns[0]}`);

  // Adiciona um dia
  date.setDate(date.getDate() + 1);

  // Formata a nova data de volta para o formato "dd/mm/aaaa"
  const newFormat = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

  return newFormat;
}

export function subtrairOneDay(dateString) {
  // Converte a string de data para um objeto Date
  const parterns = dateString.split('/');
  const date = new Date(`${parterns[2]}-${parterns[1]}-${parterns[0]}`);

  // Adiciona um dia
  date.setDate(date.getDate() - 1);

  // Formata a nova data de volta para o formato "dd/mm/aaaa"
  const newFormat = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

  return newFormat;
}
