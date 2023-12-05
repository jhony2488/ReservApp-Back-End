export function somarOneDay(dateString) {
  // Converte a string de data para um objeto Date
  const parterns = dateString.split('/');
  const date = new Date(`${parterns[2]}-${parterns[1]}-${parterns[0]}`+'T'+'11:01:33.000Z');

  // Adiciona um dia
  date.setDate(date.getDate() + 1);

  // Formata a nova data de volta para o formato "dd/mm/aaaa"
  const newFormat = `${
    parseInt(String(date.getDate())) < 9 ? '0' + String(date.getDate()) : String(date.getDate())
  }/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

  return newFormat;
}

export function subtrairOneDay(dateString) {
  // Converte a string de data para um objeto Date
  const parterns = dateString.split('/');
  const date = new Date(`${parterns[2]}-${parterns[1]}-${parterns[0]}`+'T'+'11:01:33.000Z');

  // Adiciona um dia
  date.setDate(date.getDate() - 1);

  // Formata a nova data de volta para o formato "dd/mm/aaaa"
  const newFormat = `${parseInt(String(date.getDate())) < 9 ? '0' + String(date.getDate()) : String(date.getDate())}/${String(date.getMonth() + 1).padStart(
    2,
    '0',
  )}/${date.getFullYear()}`;

  return newFormat;
}
