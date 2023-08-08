import scrollBtn from "./dom/header.js";

const d = document;
const ls = localStorage;
const $containerFavs = d.getElementById("container-favs")


d.addEventListener("DOMContentLoaded", e =>{
    scrollBtn();
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
    pokemones.forEach(e =>{
        
    })
    d.addEventListener("click", e =>{
        if (e.target.className === "boton-fav remove") {
            const pokName = e.target.parentElement.querySelector("h1").textContent
            let resultado = pokemones.filter(element => element.nombre !== pokName);
            pokemones = resultado;
            $containerFavs.removeChild(e.target.parentElement);
            console.log(pokemones);
            ls.setItem("pokemones", JSON.stringify(pokemones));
        }
    })
})