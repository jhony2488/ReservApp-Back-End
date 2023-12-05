export function getFormattedCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return { date: `${year}-${month}-${day}`, hour: `${hours}:${minutes}:${seconds}` };
}

// Função para filtrar objetos com data e hora inferiores à data e hora atual
export function filterObjectsBeforeCurrentDateTime(objects) {
  const currentDateTime = getFormattedCurrentDateTime();

  if(typeof objects ==='object' &&  objects!==null){
    objects=[objects]
  }
  if(!objects || objects===null){
    return []
  }

  const filteredObjects = objects?.filter(obj => {
    const objDateTime = `${obj.date} ${obj.hour}`;
    return objDateTime < currentDateTime.date + ' ' + currentDateTime.hour;
  });

  return filteredObjects;
}
