
// active scroll header

var header = document.querySelector(".header__bottom");

// function changeCss() {
//   header.style.position = "fixed";
//   header.style.top = "0";
// }

window.addEventListener("scroll", (event) => {
    console.log(window.scrollY);
    if (window.scrollY > 56) {
        header.classList.add("--changeCss");
        console.log("first");
    } else {
        if (header.classList.contains("--changeCss")) {
            header.classList.remove("--changeCss");
        }
    }
});

//   toggle dark light theme
document.getElementById("toggleDark").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
}