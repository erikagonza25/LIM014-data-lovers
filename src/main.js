import { dataSort, filterData, filterName, filterLevel} from './data.js';
import data from './data/lol/lol.js';


// Select con el valor de Orden
let orden = document.querySelector(".orden");
//Este player es para traer la data
const players = Object.entries(data.data);
// Imprime las ventanas modales 
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
        `<section class="modalContent">
        <div class="containImg"><img class="imgModal" alt="${element[1].name}" src= "${element[1].splash}" ></div>
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
// Plasmar las cards en la pagina web
players.forEach(paintModal);
//Función para ordenar A-Z/ Z-A
orden.addEventListener("change", (event)=>{
    document.getElementById("containCards").innerHTML="";
    const ordenar = Object.keys(data.data).map(key =>{
        return data.data[key];
    }) 
        let sortData = dataSort(ordenar,"name",event.target.value);
          
        const ordenO = Object.entries(sortData);
                
        ordenO.forEach(paintModal);  
}); 
//Función para filtrar por Roles
document.querySelector(".selector").addEventListener("change", (event) => {
    document.getElementById("containCards").innerHTML="";
    const dataLOL = Object.keys(data.data).map(key =>{
        return data.data[key];
    })
        let dataFilter = filterData(dataLOL, event.target.value);
          
        const filterR = Object.entries(dataFilter);
                
        filterR.forEach(paintModal);  
}); 
//  Funcion para crear las opciones del datalist
let datalistSearch = document.getElementById("search");
    const optionName = Object.keys(data.data);
    
    optionName.forEach(function(data){
        let optionSearch = document.createElement("option")
        optionSearch.value = data;
        datalistSearch.appendChild(optionSearch);
});
//Función para filtrar por Buscador
document.getElementById("searchOne").addEventListener("change", (event) => {
    document.getElementById("containCards").innerHTML="";
    const dataLOL = Object.keys(data.data).map(key =>{
        return data.data[key];
    })
        let nameFilter = filterName(dataLOL, event.target.value);
          
        const filterB = Object.entries(nameFilter);
                
        filterB.forEach(paintModal);  
}); 
//Función para filtrar por Niveles
document.querySelector(".levelPlayers").addEventListener("change", (event) => {
    document.getElementById("containCards").innerHTML="";
    const dataLOL = Object.keys(data.data).map(key =>{
        return data.data[key];
        })
            let playersFilter = filterLevel(dataLOL, event.target.value);
            const filterB = Object.entries(playersFilter);
                
            filterB.forEach(paintModal);  
}); 



