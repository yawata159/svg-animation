function main() {

    var rid = 0;
    var ns = "http://www.w3.org/2000/svg";

    var svg = document.getElementById("svg");
    var circle = document.getElementById("circle");
    var dvd = document.getElementById("dvd");
    var clear = document.getElementById("clear");
    var stop = document.getElementById("stop");

    function clearStuff(e) {
        console.log("clear");
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }
    }

    function animateCircle(e) {
        console.log("circle");
        clearStuff();
        window.cancelAnimationFrame(rid);


        var dir = 1;
        var circ = document.createElementNS(ns, "circle");
        circ.setAttribute("cx", 450);
        circ.setAttribute("cy", 300);
        circ.setAttribute("r", 0);
        circ.setAttribute("fill", "black");

        svg.appendChild(circ);

        function circFrame() {
            var r = +circ.getAttribute("r") + dir;
            circ.setAttribute("r", r);
            if (r <= 0 || r >= 300) {
                dir *= -1;
            }
            rid = window.requestAnimationFrame(circFrame);
        }
        circFrame();

    }

    function animateDVD(e) {
        console.log("dvd");
        clearStuff();
        window.cancelAnimationFrame(rid);

        var xdir = 1;
        var ydir = 1;

        var rect = document.createElementNS(ns, "rect");
        rect.setAttribute("x", 450);
        rect.setAttribute("y", 300);
        rect.setAttribute("height", 100);
        rect.setAttribute("width", 150);
        rect.setAttribute("fill", "black");

        svg.appendChild(rect);

        function dvdFrame() {
            var leftX = +rect.getAttribute("x");
            var rightX = leftX + 150;
            var topY = +rect.getAttribute("y");
            var botY = topY + 100;

            if (leftX <= 0 || rightX >= 900) xdir *= -1;
            if (topY <= 0 || botY >= 600) ydir *= -1;

            rect.setAttribute("x", leftX + xdir);
            rect.setAttribute("y", topY + ydir);

            rid = window.requestAnimationFrame(dvdFrame);
        }

        dvdFrame();
    }

    function stopIt(e) {
        console.log("stop");
        window.cancelAnimationFrame(rid);
    }

    circle.addEventListener("click", animateCircle);
    dvd.addEventListener("click", animateDVD);
    stop.addEventListener("click", stopIt);
}

window.onload = main;
