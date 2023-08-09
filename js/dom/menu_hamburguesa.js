const d = document;

export default function hamburguesa(panelBtn, panel, menuLink){
    d.addEventListener("click", e => {
        if (e.target === d.querySelector(".panel-btn") || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(".panel").classList.toggle("is-active");
            d.querySelector(".panel-btn").classList.toggle("is-active")
        }
    })
}