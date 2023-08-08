import favsLs from "./dom/favs.js";
import obtenerPokemon from "./dom/fetch.js";
import filtro from "./dom/filtrado.js";
import scrollBtn from "./dom/header.js";

const d = document;
var arrayGlobal = [];


d.addEventListener("DOMContentLoaded", e =>{
    scrollBtn();
    obtenerPokemon();
    favsLs();
    filtro();
});


