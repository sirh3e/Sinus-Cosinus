function checkInput() {
    document.getElementById("check").onclick = function () {
        if(document.getElementById("x").value != null && document.getElementById("y").value)
        {
            changeSize();
        }
    }
}

function changeSize() {
    var canvas = document.getElementById("sinus");
    canvas.width = document.getElementById("x").value;
    canvas.height = document.getElementById("y").value;

    clearInput();
    draw();
}

function clearInput() {
    var inputs = document.querySelectorAll("label input");
    for(var i = 0; i < inputs.length; ++i)
    {
        inputs[i].value = null;
    }
}

function draw(){
    var canvas = document.getElementById("sinus");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();

    //X line
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);

    //Y line
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.stroke();

    //Sinus line
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    for(i = 0; i <= canvas.width; i++) {
        ctx.lineTo(i, canvas.height / 2 - Math.sin(i / 2 * Math.PI / 180) * canvas.height / 2);
    }
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();

    //Cosinus line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    for(i = 0; i <= canvas.width; i++) {
        ctx.lineTo(i, canvas.height / 2 - Math.cos(i / 2 * Math.PI / 180) * canvas.height / 2);
    }
    ctx.strokeStyle = '#0000FF';
    ctx.stroke();
}