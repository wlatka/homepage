console.log("Hello to all developers!")

let js_button = document.querySelector(".js_button");
let containerBody = document.querySelector(".containerBody");
let js_table = document.querySelector(".js_table");
let js_themeName = document.querySelector(".js_themeName");
let js_newCar = document.querySelector(".js_newCar");
let js_camper = document.querySelector(".js_camper");

js_button.addEventListener("click", () => {
    containerBody.classList.toggle("containerBodydark");
    js_table.remove();

    if (containerBody.classList.contains("containerBodydark")) {
        js_themeName.innerText = "jasny";
    } else {
        js_themeName.innerText = "ciemny";
    }
});

js_newCar.addEventListener("click", () => {
    js_camper.innerHTML = "<img width='70%' src='images/camper.jpg' alt='Nowy Camper' />";
});
