import { dataSort, filterData, filterName, filterLevel } from '../src/data.js';
const testLol = [{
  "id": "Aatrox",
  "name": "Aatrox",
  "tags": ["Fighter","Tank"],
  "info": {"attack": 8,"defense": 4,"magic": 3,"difficulty": 4},
    },  {
  "id": "Ahri",
  "name": "Ahri",
  "tags": ["Mage","Assassin"],
  "info": {"attack": 3,"defense": 4,"magic": 8,"difficulty": 5}
},  {
  "id": "Akali",
  "name": "Akali",
  "tags": ["Assassin"],
  "info": {"attack": 5,"defense": 3,"magic": 8,"difficulty": 7},
}, {
  "id": "Alistar",
  "name": "Alistar",
  "tags": ["Tank","Support"],
  "info": {"attack": 6,"defense": 9,"magic": 5,"difficulty": 7}, 
}, {
  "id": "Zyra",
  "name": "Zyra",
  "tags": ["Mage","Support"],
  "info": {"attack": 4,"defense": 3,"magic": 8,"difficulty": 7},
}]; 
const testOrder = [{
  "id": "Zyra",
  "name": "Zyra",
  "tags": ["Mage","Support"],
  "info": {"attack": 4,"defense": 3,"magic": 8,"difficulty": 7},
    },  {
  "id": "Alistar",
  "name": "Alistar",
  "tags": ["Tank","Support"],
  "info": {"attack": 6,"defense": 9,"magic": 5,"difficulty": 7},
  
},  {
 "id": "Ahri",
 "name": "Ahri",
 "tags": ["Mage","Assassin"],
 "info": {"attack": 3,"defense": 4,"magic": 8,"difficulty": 5}
  
}, {
 "id": "Akali",
 "name": "Akali",
 "tags": ["Assassin"],
 "info": {"attack": 5,"defense": 3,"magic": 8,"difficulty": 7},
  
}, {
  "id": "Aatrox",
  "name": "Aatrox",
  "tags": ["Fighter","Tank"],
  "info": {"attack": 8,"defense": 4,"magic": 3,"difficulty": 4},
  
}]; 

const testFilterName= [{
  "id": "Akali",
  "name": "Akali",
  "tags": ["Assassin"],
  "info": {"attack": 5,"defense": 3,"magic": 8,"difficulty": 7},
  }]; 

  const testLevel = [{
  "id": "Akali",
  "name": "Akali",
  "tags": ["Assassin"],
  "info": {"attack": 5,"defense": 3,"magic": 8,"difficulty": 7},
}, {
  "id": "Alistar",
  "name": "Alistar",
  "tags": ["Tank","Support"],
  "info": {"attack": 6,"defense": 9,"magic": 5,"difficulty": 7}, 
}, {
  "id": "Zyra",
  "name": "Zyra",
  "tags": ["Mage","Support"],
  "info": {"attack": 4,"defense": 3,"magic": 8,"difficulty": 7},
}];



describe('dataSort', () => {
  it('is a function', () => {
    expect(typeof dataSort).toBe('function');
  });

  it('deberia ordenar los personajes de la Z-A', () => {
    expect(dataSort(testLol, "name, za")).toEqual(testOrder);
    
  });
});


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('debería devolver un array', ()  => {
    expect(filterData(testLol)).toEqual([]);
  });
});

describe('filterName', () => {
  it('is a function', () => {
    expect(typeof filterName).toBe('function');
  });

  it('debería obtener el personaje seleccionado', () => {
    expect(filterName(testLol, "Akali")).toEqual(testFilterName);
  });
});
describe('filterLevel', () => {
  it('is a function', () => {
    expect(typeof filterLevel).toBe('function');
  });

  it('debería devolvelos los personajes Díficiles ', () => {
    expect(filterLevel(testLol, 'dificil')).toEqual(testLevel);
  });
});


