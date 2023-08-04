import obtenerPokemon from "./dom/fetch.js";
import scrollBtn from "./dom/header.js";

const d = document;


d.addEventListener("DOMContentLoaded", e =>{
    scrollBtn();
    obtenerPokemon();
});