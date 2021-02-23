// Filtrado por orden A-Z/ Z-A
export const dataSort = (data,sortOrder) => {
  switch (sortOrder) {
    case 'az':
      return sortName(data).reverse()
    case 'za':
      return sortName(data)
  }
};
export const sortName = (data) => {
  return data.sort((a, b)=> {
    if (a.name > b.name) {
      return -1;
    }if(a.name < b.name){
      return 1;
    }
    return 0;
  })
}
//Filtrado por Roles
export const filterData = (data, condition) => {
  let result = [];
  for (let i = 0; i < data.length; i++){
    for (let e = 0; e < data[i].tags.length; e++){
      if(data[i].tags[e] === condition){
        result.push(data[i])
      }
    }
  }
  return result;
};
//Filtrado por Nombre
export const filterName = (data, condition) => {
  return data.filter(nameFilter => nameFilter.id.includes(condition))
};
//Filtrado por Niveles
export const filterLevel = (data, condition) => { 
  switch (condition) {
    case 'facil':
      return data.filter(({ info }) => info.difficulty <= 3);
    case 'medio':
      return data.filter(({ info }) => info.difficulty >= 4 && info.difficulty <= 6  );
    case 'dificil':
      return data.filter(({ info }) => info.difficulty > 6);
  }
 };