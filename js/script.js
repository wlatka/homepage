console.log("Hello to all developers!")

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let table = document.querySelector(".js-table");
let themeName = document.querySelector(".js-themeName");
let newCar = document.querySelector(".js-newCar");
let camper = document.querySelector(".js-camper");

button.addEventListener("click", () => {
    body.classList.toggle("containerBodydark");
    table.remove();

    if (body.classList.contains("containerBodydark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }
});

newCar.addEventListener("click", () => {
    camper.innerHTML = "<img width='70%' src='images/camper.jpg' alt='Nowy Camper' />";
});
