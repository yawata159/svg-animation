function main() {
    var svg = document.getElementById("svg");
    var circle = document.getElementById("circle");
    var dvd = document.getElementById("dvd");
    var stop = document.getElementById("stop");

    function animateCircle(e) {
        console.log("circle");
    }

    function animateDVD(e) {
        console.log("dvd");
    }

    function stopIt(e) {
        console.log("stop");
    }

    circle.addEventListener("click", animateCircle);
    dvd.addEventListener("click", animateDVD);
    stop.addEventListener("click", stopIt);
}

window.onload = main;
