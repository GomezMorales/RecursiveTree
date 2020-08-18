var ctx = canvas.getContext("2d");

function drawLine(origenX, origenY, destinoX, destinoY) {
    var canvas = document.getElementById("canvas");

    // Linea desde Origen a Destino
    ctx.beginPath();
    ctx.moveTo(origenX, origenY);
    ctx.lineTo(destinoX, destinoY);

    ctx.stroke();
}

function drawTree(origenX, origenY, brenchs, brenchActual, longBrench) {
    if (brenchActual == brenchs) {
        drawLine(500, 1000, 500, 500);
    } else {
        drawTree(origenX + longBrench / 2, origenY - longBrench / 2, brenchs, brenchActual + 1, longBrench / 2);
        drawTree(origenX - longBrench / 2, origenY - longBrench / 2, brenchs, brenchActual + 1, longBrench / 2);
        drawTree(origenX, origenY - longBrench / 2, brenchs, brenchActual + 1, longBrench / 2);

        drawLine(origenX, origenY, origenX + longBrench / 2, origenY - longBrench / 2);
        drawLine(origenX, origenY, origenX - longBrench / 2, origenY - longBrench / 2);
        drawLine(origenX, origenY, origenX, origenY - longBrench / 2);
    }
}


let showTree = document.getElementById("showTree");
showTree.onclick = function() {
    if ((parseInt(levelTree.value) > 0) && (parseInt(levelTree.value) < 13)) {
        let levelTree = document.getElementById("levelTree");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawTree(500, 500, parseInt(levelTree.value), 1, 500);
    } else {
        alert("Level is between 1 and 12")
    }
}