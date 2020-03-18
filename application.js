//evento onclick
document.getElementById("btnTriggerClick").addEventListener("click", onClickBtn);

function onClickBtn() {
    document.getElementById("msg").innerHTML = "Você clicou no botão!";
}

//evento onmouseover
document.getElementById("color").onmouseover = function () { mouseOver() };
function mouseOver() {
    document.getElementById("color").style.color = "red";
}

document.getElementById("color").onmouseout = function () { mouseOut() };
function mouseOut() {
    document.getElementById("color").style.color = "black";
}

//PDCA P
document.getElementById("msgm").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("msgm").innerHTML = "Plano de Ação!";
}
document.getElementById("msgm").onmouseover = function () { mouseOver() };
function mouseOver() {
    document.getElementById("msgm").style.color = "yellow";
}

document.getElementById("msgm").onmouseout = function () { mouseOut() };
function mouseOut() {
    document.getElementById("msgm").style.color = "black";
}