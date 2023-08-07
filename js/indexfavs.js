import scrollBtn from "./dom/header.js";

const d = document;
const ls = localStorage;
const $containerFavs = d.getElementById("container-favs")


d.addEventListener("DOMContentLoaded", e =>{
    scrollBtn
    let pokemones =  JSON.parse(ls.getItem("pokemones"));
    pokemones.forEach(element => {
        const $favs = d.createElement("div");
            $favs.className = "card";
            $favs.innerHTML =  `
            <img src="${element.image}">
            <h1>${element.nombre}</h1>
            <p>Type: ${element.tipo}</p>
            <button class="boton-fav remove">Remove</button>
            `;
            $containerFavs.appendChild($favs)
        console.log(element.nombre, element.tipo)
    });

    console.log(pokemones)
})