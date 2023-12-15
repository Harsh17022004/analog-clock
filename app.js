

function show_clock() {
    let sound = new Audio('tick.mp3');
    sound.play();

    let h = document.querySelector(".hr");
    let m = document.querySelector(".mn");
    let s = document.querySelector(".ss");

    let date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30 * hour + minutes / 2}deg)`
    m.style.transform = `rotate(${6 * minutes}deg)`
    s.style.transform = `rotate(${6 * seconds}deg)`

}

setInterval(show_clock, 1000);