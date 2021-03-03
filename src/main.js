import { dataSort, filterData, filterName, filterLevel} from './data.js';
import data from './data/lol/lol.js';
// Selectores
let orden = document.querySelector(".orden");
let rolC = document.querySelector(".selector");
let levelC = document.querySelector(".levelPlayers");
let searchPlayers = document.getElementById("searchOne");
let datalistSearch = document.getElementById("search")
// Función que contiene las cards y las ventanas modales
const paintModal = element => {
    const card = document.createElement("div")
    card.innerHTML = `<button class="imageB" widht=130 ><img class="imgPlayers" alt="${element[1].name}" src= "${element[1].splash}">
    <div class="namePlayers"<p> ${element[1].name.toUpperCase()} </p></div></button>`
    card.className ="cardsPlayers"
    document.getElementById("containCards").appendChild(card);
    card.addEventListener("click",() => {
        let open = document.querySelector(".modal");
        let openContain = document.querySelector(".modalContain");
        open.style.visibility = "visible";
        open.style.opacity = "1";
        openContain.style.visibility = "visible";
        openContain.style.opacity = "1";
        openContain.innerHTML ="";
        openContain.innerHTML +=
        `<section class="modalContent" style="background-image: url(${element[1].splash});">
        <div class="modifications">
        <h4>${element[1].name.toUpperCase()}</h4>
        <div class = "info"><p>${element[1].blurb}</p>
        <h5>Roles: ${element[1].tags}</h5></div>
        <div class = "levels"><p><img src="./image/defensa.png">Defensa:  ${element[1].info.defense}</p>
        <p><img src="./image/ataque.png">Ataque:  ${element[1].info.attack}</p>
        <p><img src="./image/magia.png">Magia:  ${element[1].info.magic}</p>
        <p><img src="./image/dificultad.png">Dificultad:  ${element[1].info.difficulty}</p></div></div>
        </section>
        `
      })
    const close = document.getElementById("close");
    close.addEventListener("click",() => {
        let close = document.querySelector(".modal");
        let closeContain = document.querySelector(".modalContain");
        close.style.visibility = "hidden";
        close.style.opacity = "0";
        closeContain.style.visibility = "hidden";
        closeContain.style.opacity = "0";
    });
    }
//Constante para entrar en la data
const players = Object.entries(data.data);
// Plasmar las cards en el div "containCards"
players.forEach(paintModal);
// Constante para entrar y recorrer la data en los filtrados
const dataLOL = Object.keys(data.data).map(key =>{
    return data.data[key];})
//Plasmar en el selector la función orden alfabetico
orden.addEventListener("change", () => filterAll(dataLOL));
//Plasmar en el selector la función filtrado por roles
rolC.addEventListener("change", () => filterAll(dataLOL));
//Plasmar en el selector la función filtrado por nombre
searchPlayers.addEventListener("change", () => filterAll(dataLOL));
//Plasmar en el selector la función filtrado por niveles de dificultad
levelC.addEventListener("change", () => filterAll(dataLOL));
//Constante para la creación del datalist
const optionName = Object.keys(data.data);
//  Creación de las opciones del datalist;
optionName.map(function(data){
        let optionSearch = document.createElement("option")
        optionSearch.value = data;
        datalistSearch.appendChild(optionSearch);
});
//Función para unir los filtros 
function filterAll (data){
    document.getElementById("containCards").innerHTML="";
    const roles = rolC.value;
    const levelsChampion = levelC.value;
    const nameChapions = searchPlayers.value;
    const sortingOut = orden.value;
    let dataFilter = filterData(data,roles);
    let playersFilter = filterLevel(dataFilter, levelsChampion);
    let nameFilter = filterName(playersFilter, nameChapions);
    let sortData = dataSort(nameFilter,sortingOut);

            const filterN = Object.entries(sortData); 
            filterN.map(paintModal); 
}