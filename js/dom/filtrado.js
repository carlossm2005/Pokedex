const d = document;
const $form = d.getElementById("search-pokemon");


export default function filtro() {
    $form.addEventListener("submit", e =>{
        e.preventDefault();
        if ($form.searcharea.value !== "") {
            d.querySelectorAll(".card h1").forEach(e => {
                if (!e.textContent.toLowerCase().startsWith($form.searcharea.value, 1)) {
                    e.parentElement.classList.add("filter");
                } else{
                    e.parentElement.classList.remove("filter");
                }
            });
        } else if($form.searcharea.value === ""){
            d.querySelectorAll(".card h1").forEach(e => {
                e.parentElement.classList.remove("filter");
            });
        };
    });
}