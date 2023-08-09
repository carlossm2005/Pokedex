import favsLs from "./dom/favs.js";
import obtenerPokemon from "./dom/fetch.js";
import filtro from "./dom/filtrado.js";
import scrollBtn from "./dom/header.js";
import hamburguesa from "./dom/menu_hamburguesa.js";

const d = document;


d.addEventListener("DOMContentLoaded", e =>{
    scrollBtn();
    obtenerPokemon();
    favsLs();
    filtro();
});
hamburguesa(".panel-btn", ".panel", ".menu a");


