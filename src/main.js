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
    card.innerHTML = `<button class="imageB" data-open="modal1" widht=130 ><img class="imgPlayers" alt="${element[1].name}" src= "${element[1].splash}"></button>
    <div class="namePlayers"<p> ${element[1].name.toUpperCase()} </p></div>`
    card.className ="cardsPlayers"

    card.addEventListener("click",() => {
        let open = document.querySelector(".modal");
        let openContain = document.querySelector(".modalContain");
        open.style.visibility = "visible";
        open.style.opacity = "1";
        openContain.style.visibility = "visible";
        openContain.style.opacity = "1";
        document.querySelector(".modalContain").innerHTML ="";
        document.querySelector(".modalContain").innerHTML +=
        `<section class="modalContent" style="background-image: url(${element[1].splash});">
        <div class="modifications">
        <h4>${element[1].name.toUpperCase()}</h4>
        <div class = "info"><p>${element[1].blurb}</p></div>
        <div class = "levels"><p><img src="defensa.png">Defensa:  ${element[1].info.defense}</p>
        <p><img src="ataque.png">Ataque:  ${element[1].info.attack}</p>
        <p><img src="magia.png">Magia:  ${element[1].info.magic}</p>
        <p><img src="dificultad.png">Dificultad:  ${element[1].info.difficulty}</p></div></div>
        </section>
        `
      })
      document.getElementById("containCards").appendChild(card)
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
orden.addEventListener("change", () => filtroCompleto(dataLOL))
//Plasmar en el selector la función filtrado por roles
rolC.addEventListener("change", () => filtroCompleto(dataLOL))
//Plasmar en el selector la función filtrado por nombre
searchPlayers.addEventListener("change", () => filtroCompleto(dataLOL));
//Constante para la creación del datalist
const optionName = Object.keys(data.data);
//  Creación de las opciones del datalist;
optionName.forEach(function(data){
        let optionSearch = document.createElement("option")
        optionSearch.value = data;
        datalistSearch.appendChild(optionSearch);
});
//Plasmar en el selector la función filtrado por niveles de dificultad
levelC.addEventListener("change", () => filtroCompleto(dataLOL));
function filtroCompleto (data){
    document.getElementById("containCards").innerHTML="";
    const roles = rolC.value;
    const niveles = levelC.value;
    const nombre = searchPlayers.value;
    const ordenando = orden.value;
    let dataFilter = filterData(data,roles);
    let playersFilter = filterLevel(dataFilter, niveles);
    let nameFilter = filterName(playersFilter, nombre);
    let sortData = dataSort(nameFilter,ordenando);
    
            const filterN = Object.entries(sortData); 
            filterN.forEach(paintModal); 
}



