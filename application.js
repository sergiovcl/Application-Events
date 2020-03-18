document.getElementById("btnTriggerClick").addEventListener("click", onClickBtn);

function onClickBtn() {
    document.getElementById("msg").innerHTML = "Você clicou no botão!";
}

document.getElementById("color").onmouseover = function () { mouseOver() };
function mouseOver() {
    document.getElementById("color").style.color = "red";
}

document.getElementById("color").onmouseout = function () { mouseOut() };
function mouseOut() {
    document.getElementById("color").style.color = "black";
}


document.getElementById("clique").addEventListener("click", onClickBtn);

function onClickBtn() {
    document.getElementById("msgm").innerHTML = "Plano de ação";
}