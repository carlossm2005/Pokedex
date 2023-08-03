const d = document,
w = window;

export default function scrollBtn(){
    w.addEventListener("scroll", e =>{
        let scrollpx = w.scrollY || d.documentElement.scrollTop;
        console.log(scrollpx)
        if (scrollpx > 350) {
            d.querySelector("header").classList.add("scroll-down");
        } else{
            d.querySelector("header").classList.remove("scroll-down");
        }
    })
}