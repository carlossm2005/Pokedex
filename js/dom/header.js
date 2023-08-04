const d = document,
w = window;

export default function scrollBtn(){
    w.addEventListener("scroll", e =>{
        let scrollpx = w.scrollY || d.documentElement.scrollTop;
        if (scrollpx > 250) {
            d.querySelector("header").classList.add("scroll-down");
        } else{
            d.querySelector("header").classList.remove("scroll-down");
        }
    })
}