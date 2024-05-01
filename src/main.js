import { dataSort, filterData, filterName, filterLevel} from './data.js';
import data from './data/lol/lol.js';
// Selectores
let orden = document.querySelector(".orden");
let rolC = document.querySelector(".selector");
let levelC = document.querySelector(".levelPlayers");
let searchPlayers = document.getElementById("searchOne");
let btnReset = document.getElementById("btnReset")
// Función que contiene las cards y las ventanas modales
const paintModal = element => {
    const card = document.createElement("div")
    let openContain = document.querySelector(".modalContain");
    card.innerHTML = `<button class="imageB" widht=130 ><img class="imgPlayers" alt="${element[1].name}" src= "${element[1].splash}">
    <div class="namePlayers"<p> ${element[1].name.toUpperCase()} </p></div></button>`
    card.className ="cardsPlayers"
    document.getElementById("containCards").appendChild(card);
    card.addEventListener("click",() => {
        let open = document.querySelector(".modal");
        let openContain = document.querySelector(".modalContain");
        let botonNew = document.querySelector(".bottonScroll");
        botonNew.style.visibility = "hidden";
        botonNew.style.opacity = "0";
        open.style.visibility = "visible";
        open.style.opacity = "1";
        openContain.style.visibility = "visible";
        openContain.style.opacity = "1";
        openContain.innerHTML ="";
        // Crear un array de <li> con los roles
        const rolesListItems = element[1].tags.map(tag => {
            return `<li>${tag}</li>`;
        });

        // Unir los elementos del array en una cadena
        const rolesHTML = rolesListItems.join('');
        openContain.innerHTML +=
            `<section class="modalContent" style="background-image: url(${element[1].splash});">
                <div class="container-close-destokp">
                    <button id="close-destokp" class="close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="modifications">
                    <div class="d-flex w-100 justify-content-end">
                        <button id="close-mobile" class="close"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <h4>${element[1].name.toUpperCase()}</h4>
                    <div class = "info">
                        <p>${element[1].blurb}</p>
                        <h5>Roles: </h5>
                        <ul class="list-roles">
                            ${rolesHTML}
                        </ul>
                    </div>
                    <div class="levels">
                        <p><img src="./image/defensa.png">Defensa:  ${element[1].info.defense}</p>
                        <p><img src="./image/ataque.png">Ataque:  ${element[1].info.attack}</p>
                        <p><img src="./image/magia.png">Magia:  ${element[1].info.magic}</p>
                        <p><img src="./image/dificultad.png">Dificultad:  ${element[1].info.difficulty}</p>
                    </div>
                </div>
            </section>
            `
        const close_mobile = openContain.querySelector("#close-mobile");
        close_mobile.addEventListener("click", closeModal);
        const close_destokp = document.getElementById("close-destokp");
        close_destokp.addEventListener("click", closeModal);
      })
}
function closeModal () {
    let close = document.querySelector(".modal");
    let closeContain = document.querySelector(".modalContain");
    let botonNew = document.querySelector(".bottonScroll");
    botonNew.style.visibility = "visible";
    botonNew.style.opacity = "1";
    close.style.visibility = "hidden";
    close.style.opacity = "0";
    closeContain.style.visibility = "hidden";
    closeContain.style.opacity = "0";
}
//Constante para entrar en la data
const players = Object.entries(data.data);
// Plasmar las cards en el div "containCards"
players.forEach(paintModal);
// Constante para entrar y recorrer la data en los filtrados
const dataLOL = Object.keys(data.data).map(key => data.data[key])
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

// Crear instancia de Choices
const select = new Choices('#searchOne', {
    searchEnabled: true
});

// Crear un array de opciones
const choicesWithPlaceholder = [{ value: '', label: 'Nombres', selected: true, disabled: true }]
  .concat(optionName.map(function(data) {
    return { value: data, label: data };
}));

// Agregar todas las opciones al selector
select.setChoices(choicesWithPlaceholder, 'value', 'label', true);

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
    if (nameFilter == "") {
        Swal.fire({
            title: "Oops...",
            html: `
                <p>El campeón no cumple con los filtros asignados</p>
            `,
            icon: "warning"
        });
    }
}
//Función para crear un boton que lleve al inicio de pagina
window.onscroll = function(){
    if(document.documentElement.scrollTop>200){
        document.querySelector(".bottonScroll").classList.add("show")
    }else{
        document.querySelector(".bottonScroll").classList.remove("show")
    }
}
document.querySelector(".bottonScroll").addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
})

btnReset.addEventListener("click",() => {
    rolC.value = "";
    levelC.value = "";
    searchPlayers.value = "";
    orden.value = "";
    // Limpiar el input del selector Choice.js
    select.clearInput();
    // Limpiar la selección actual del selector Choice.js
    select.clearStore();
    select.setChoices(choicesWithPlaceholder, 'value', 'label', true);
    filterAll(dataLOL);
});
