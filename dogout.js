function releaseDog() {
    let door = document.getElementById("door");
    let dog = document.getElementById("dog");
    let sound = document.getElementById("sound");

    // Drzwi wylatują daleko w powietrze
    door.style.transform = "translate(500px, -500px) rotate(720deg)";

    // 🔹 Po 1 sekundzie drzwi zaczynają znikać
    setTimeout(() => {
        door.style.opacity = "0";
    }, 1000);

    // Pies wychodzi w PRAWO i zostaje
    setTimeout(() => {
        dog.style.transform = "translateX(200px)";
        dog.style.position = "absolute";
        sound.play();
    }, 500);
}
