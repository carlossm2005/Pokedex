import scrollBtn from "./dom/header.js";
import hamburguesa from "./dom/menu_hamburguesa.js";

const d = document;
const ls = localStorage;
const $containerFavs = d.getElementById("container-favs")


d.addEventListener("DOMContentLoaded", e =>{
    scrollBtn();
    let myFavs = [];
    const itemsLocal = JSON.parse(ls.getItem("pokemones"));
    if (itemsLocal?.length) {
        myFavs = [...itemsLocal];
    };
    function eliminar(event){
        const pokemonId = event.target.dataset.id;
        let resultado = myFavs.filter(pokemon => 
           pokemonId !== pokemon.id
        );
        myFavs = resultado;
        ls.setItem("pokemones", JSON.stringify(myFavs));
        $containerFavs.removeChild(event.target.parentElement)
    };
    let pokemones =  JSON.parse(ls.getItem("pokemones"));
    /* pokemones.forEach(element => {
        const $favs = d.createElement("div");
            $favs.className = "card";
            $favs.innerHTML =  `
            <img src="${element.image}">
            <h1>${element.nombre}</h1>
            <p>${element.tipo}</p>
            <button class="boton-fav remove">Remove</button>
            `
            $containerFavs.appendChild($favs)
    }); */
    pokemones.forEach(pokemon =>{
        async function getDatos() {
            try {
                let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.id);
                let json = await respuesta.json();
                const pokemonObj = {
                    nombre: json.name.charAt(0).toUpperCase() + json.name.slice(1),
                    id: json.id,
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + json.id + ".svg",
                    tipo: json.types.map(tipo => tipo.type.name).toString()
                }
                const $card = d.createElement("div");
                $card.className = "card";
                $card.innerHTML =  `
                <img src="${pokemonObj.image}">
                <h1>"${pokemonObj.nombre}"</h1>
                <p>Type: "${pokemonObj.tipo}"</p>
                <button data-id="${pokemonObj.id}" class="boton-fav remove">Remove</button>
                `;
                $containerFavs.appendChild($card)
            } catch (error) {
                console.log(error)
            }
        }
        getDatos()
    });
    d.addEventListener("click", e =>{
        if (e.target.className === "boton-fav remove") {
            eliminar(e);
        };
    });
});
hamburguesa(".panel-btn", ".panel", ".menu a");
