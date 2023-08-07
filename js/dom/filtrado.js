const d = document;
const $form = d.getElementById("search-pokemon");


export default function filtro() {
    $form.addEventListener("submit", e =>{
        e.preventDefault();
        //console.log($form.searcharea.value);
        //d.querySelectorAll(".card h1").forEach(e => console.log(e.innerHTML.toLowerCase()));
        if ($form.searcharea.value !== "") {
            console.log(true)
        } else{
            console.log(false)
        }

    });
}