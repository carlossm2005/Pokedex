const d = document;
const ls = localStorage;
const $containerpk = d.getElementById("container-pokemons");
const $containerFavs = d.getElementById("container-favs");

export default function favsLs() {
    let myFavs = [];
    $containerpk.addEventListener("click", e =>{
        const $boton = e.target.parentElement.querySelector("button");
        const $nombre = e.target.parentElement.querySelector("h1").textContent;
        if (e.target.className === "boton-fav") {
            const pkm = e.target.parentElement;
            const objectpkm = {
                nombre: pkm.querySelector("h1").textContent,
                image: pkm.querySelector("img").src,
                tipo: pkm.querySelector("p").textContent,
            };
            myFavs.push(objectpkm);
            ls.setItem("pokemones", JSON.stringify(myFavs));
            $boton.textContent = "Remove";
            $boton.classList.toggle("remove");
        } else if (e.target.className === "boton-fav remove") {
            $boton.textContent = "Add to favs";
            $boton.classList.toggle("remove");
            
            let result = myFavs.filter(elemento => elemento.nombre === $nombre)
            console.log(result);
            myFavs.shift(result);
            ls.setItem("pokemones", JSON.stringify(myFavs));
        };
    });
}