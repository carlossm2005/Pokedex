
const d = document;
const ls = localStorage;
const $containerpk = d.getElementById("container-pokemons");
export default function favsLs() {
    let myFavs = [];
    const itemsLocal = JSON.parse(ls.getItem("pokemones"));
    if (itemsLocal?.length) {
        myFavs = [...itemsLocal];
    }

    function agregar(event){
        const $boton = event.target;
        const pokemonId = event.target.dataset.id;
        const pokemonObject = {
            id: pokemonId
        };
        myFavs.push(pokemonObject);
        ls.setItem("pokemones", JSON.stringify(myFavs));
        $boton.textContent = "Remove";
        $boton.className = "boton-fav remove"
    };
    function eliminar(event){
        const $boton = event.target;
        const pokemonId = event.target.dataset.id;
        $boton.textContent = "Add to favs";
        $boton.className = "boton-fav";
        let resultado = myFavs.filter(pokemon => 
           pokemonId !== pokemon.id
        )
        myFavs = resultado;
        ls.setItem("pokemones", JSON.stringify(myFavs));
    };
    $containerpk.addEventListener("click", e =>{

        if (e.target.className === "boton-fav") {
            agregar(e);
        } else if (e.target.className === "boton-fav remove") {
            eliminar(e);
        };
    });
}