const d = document,
ls = localStorage,
$containerpk = d.getElementById("container-pokemons");
let arrayGlobal = [];

export default function obtenerPokemon(){
    const arrayLS = JSON.parse(ls.getItem("pokemones"));
    async function Datos(){
        try {
            for (let i = 1; i <= 150; i++) {
                let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
                let json = await response.json();
                const pokemon = {
                    nombre: json.name.charAt(0).toUpperCase() + json.name.slice(1),
                    id: json.id,
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + json.id + ".svg",
                    tipo: json.types.map(tipo => tipo.type.name).toString()
                }
             /* 
             const $card = d.createElement("div");
                $card.className = "card";
                const $img = d.createElement("img");
                $img.src = pokemon.image;
                const $name = d.createElement("h1");
                $name.textContent = pokemon.nombre;
                const $type = d.createElement("p");
                $type.innerHTML = `Type: "${pokemon.tipo}"` 
                const $button = d.createElement("button");
                $button.className = "boton-fav";
                $button.textContent = "Add to favs";
                

                $card.append($img, $name, $type, $button);
                $containerpk.appendChild($card);
            */
            arrayGlobal.push(pokemon);
            };
            arrayGlobal.forEach(pokemon =>{
                const $card = d.createElement("div");
                $card.className = "card";
                $card.innerHTML =  `
                <img src="${pokemon.image}">
                <h1>"${pokemon.nombre}"</h1>
                <p>Type: "${pokemon.tipo}"</p>
                <button data-id="${pokemon.id}" class="boton-fav">Add to favs</button>
                `;
                $containerpk.appendChild($card);
                let dataButton = $card.querySelector("button").dataset.id;
                arrayLS.forEach(e =>{
                    if (dataButton === e.id) {
                        $card.querySelector("button").textContent = "Remove";
                        $card.querySelector("button").className = "boton-fav remove";
                    }
                })
            });
        } catch (error) {
            console.log(error)
        }
    };
    Datos();
}
/*
            <div class="card">
                <img src="imgs/testStyle.png">
                <h1>"Charizard"</h1>
                <p>Type: "fire, flying"</p>
                <button class="boton-fav">Add to favs</button>
            </div>
*/