import { dataSort, filterData, filterName, filterLevel } from "../src/data.js";
const testLol = [
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Braum",
    name: "Braum",
    tags: ["Support", "Tank"],
    info: { attack: 3, defense: 9, magic: 4, difficulty: 3 },
  },
  {
    id: "Ahri",
    name: "Ahri",
    tags: ["Mage", "Assassin"],
    info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
  },
  {
    id: "Zyra",
    name: "Zyra",
    tags: ["Mage", "Support"],
    info: { attack: 4, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Aatrox",
    name: "Aatrox",
    tags: ["Fighter", "Tank"],
    info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
  },
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },

  {
    id: "Alistar",
    name: "Alistar",
    tags: ["Tank", "Support"],
    info: { attack: 6, defense: 9, magic: 5, difficulty: 7 },
  },
];

const testOrder = [
  {
    id: "Zyra",
    name: "Zyra",
    tags: ["Mage", "Support"],
    info: { attack: 4, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Braum",
    name: "Braum",
    tags: ["Support", "Tank"],
    info: { attack: 3, defense: 9, magic: 4, difficulty: 3 },
  },
  {
    id: "Alistar",
    name: "Alistar",
    tags: ["Tank", "Support"],
    info: { attack: 6, defense: 9, magic: 5, difficulty: 7 },
  },
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Ahri",
    name: "Ahri",
    tags: ["Mage", "Assassin"],
    info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
  },
  {
    id: "Aatrox",
    name: "Aatrox",
    tags: ["Fighter", "Tank"],
    info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
  },
];
const testOrderAz = [
  {
    id: "Aatrox",
    name: "Aatrox",
    tags: ["Fighter", "Tank"],
    info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
  },
  {
    id: "Ahri",
    name: "Ahri",
    tags: ["Mage", "Assassin"],
    info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
  },
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },

  {
    id: "Alistar",
    name: "Alistar",
    tags: ["Tank", "Support"],
    info: { attack: 6, defense: 9, magic: 5, difficulty: 7 },
  },
  {
    id: "Braum",
    name: "Braum",
    tags: ["Support", "Tank"],
    info: { attack: 3, defense: 9, magic: 4, difficulty: 3 },
  },
  {
    id: "Zyra",
    name: "Zyra",
    tags: ["Mage", "Support"],
    info: { attack: 4, defense: 3, magic: 8, difficulty: 7 },
  },
];

const testFilterName = [
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
];

const testLevel = [
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Alistar",
    name: "Alistar",
    tags: ["Tank", "Support"],
    info: { attack: 6, defense: 9, magic: 5, difficulty: 7 },
  },
  {
    id: "Zyra",
    name: "Zyra",
    tags: ["Mage", "Support"],
    info: { attack: 4, defense: 3, magic: 8, difficulty: 7 },
  },
];

const testLevelM = [
  {
    id: "Aatrox",
    name: "Aatrox",
    tags: ["Fighter", "Tank"],
    info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
  },
  {
    id: "Ahri",
    name: "Ahri",
    tags: ["Mage", "Assassin"],
    info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
  },
];
const testLevelF = [
  {
    id: "Braum",
    name: "Braum",
    tags: ["Support", "Tank"],
    info: { attack: 3, defense: 9, magic: 4, difficulty: 3 },
  },
];

const assassinTest = [
  {
    id: "Ahri",
    name: "Ahri",
    tags: ["Mage", "Assassin"],
    info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
  },
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
];

describe("dataSort", () => {
  it("is a function", () => {
    expect(typeof dataSort).toBe("function");
  });
  it("deberia ordenar los personajes de la Z-A", () => {
    expect(dataSort(testLol, "name", "za")).toEqual(testOrder);
  });
  it("deberia ordenar los personajes de la A-Z", () => {
    expect(dataSort(testLol, "name", "az")).toEqual(testOrderAz);
  });
});

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("debería devolver un array", () => {
    expect(filterData(testLol)).toEqual([]);
  });
  it("debería devolver un campeon por su Rol", () => {
    expect(filterData(testLol, "Assassin")).toEqual(assassinTest);
  });
});

describe("filterName", () => {
  it("is a function", () => {
    expect(typeof filterName).toBe("function");
  });

  it("debería obtener el personaje seleccionado", () => {
    expect(filterName(testLol, "Akali")).toEqual(testFilterName);
  });
});
describe("filterLevel", () => {
  it("is a function", () => {
    expect(typeof filterLevel).toBe("function");
  });
  it("debería devolvelos los personajes Faciles ", () => {
    expect(filterLevel(testLol, "facil")).toEqual(testLevelF);
  });
  it("debería devolvelos los personajes Medios ", () => {
    expect(filterLevel(testLol, "medio")).toEqual(testLevelM);
  });
  it("debería devolvelos los personajes Díficiles ", () => {
    expect(filterLevel(testLol, "dificil")).toEqual(testLevel);
  });
});
/*const testLolTwo = [
  {
    id: "Zyra",
    name: "Zyra",
    tags: ["Mage", "Support"],
    info: { attack: 4, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Akali",
    name: "Akali",
    tags: ["Assassin"],
    info: { attack: 5, defense: 3, magic: 8, difficulty: 7 },
  },
  {
    id: "Braum",
    name: "Braum",
    tags: ["Support", "Tank"],
    info: { attack: 3, defense: 9, magic: 4, difficulty: 3 },
  },
  {
    id: "Ahri",
    name: "Ahri",
    tags: ["Mage", "Assassin"],
    info: { attack: 3, defense: 4, magic: 8, difficulty: 5 },
  },
  {
    id: "Aatrox",
    name: "Aatrox",
    tags: ["Fighter", "Tank"],
    info: { attack: 8, defense: 4, magic: 3, difficulty: 4 },
  },
  {
    id: "Zyra",
    name: "Zyra",
    tags: ["Mage", "Support"],
    info: { attack: 4, defense: 3, magic: 8, difficulty: 7 },
  },

  {
    id: "Alistar",
    name: "Alistar",
    tags: ["Tank", "Support"],
    info: { attack: 6, defense: 9, magic: 5, difficulty: 7 },
  },
]; */
