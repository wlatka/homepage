{
    const welcome = () => {
        console.log("Hello to all developers!");
    };

    welcome();

    const toggleBackgroung = () => {
        const body = document.documentElement;
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("containerBodyDark");
        themeName.innerText = body.classList.contains("containerBodyDark") ? "jasny" : "ciemny";
    };

    const initBackground = () => {
        const changeBackgroundButton = document.querySelector(".js-button");
        changeBackgroundButton.addEventListener("click", toggleBackgroung);

    };

    const showNewCar = () => {
        const camper = document.querySelector(".js-camper");
        camper.innerHTML = "<img width='70%' src='images/camper.jpg' alt='Nowy Camper' />";

    };

    const openNewCar = () => {
        const newCar = document.querySelector(".js-newCar");
        newCar.addEventListener("click", showNewCar);
    }

    openNewCar();
    initBackground();
};