const d = document,
$containerpk = d.getElementById("container-pokemons");

export default function obtenerPokemon(){

    let arrayGlobal = [];
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
            }
            arrayGlobal.forEach(element =>{
                const $card = d.createElement("div");
                $card.className = "card";
                $card.innerHTML =  `
                <img src="${element.image}">
                <h1>"${element.nombre}"</h1>
                <p>Type: "${element.tipo}"</p>
                <button class="boton-fav">Add to favs</button>
                `;
                $containerpk.appendChild($card);
            })
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