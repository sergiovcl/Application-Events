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
};

//PDCA P
document.getElementById("p").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("p").innerHTML = "Plano de Ação!";
}
document.getElementById("p").onmouseover = function () { mouseOver() };
function mouseOver() {
    document.getElementById("p").style.color = "red";
}

document.getElementById("p").onmouseout = function () { mouseOut() };
function mouseOut() {
    document.getElementById("p").style.color = "black";
};

//PDCA D
document.getElementById("d").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("d").innerHTML = "Execução do plano";
}
document.getElementById("d").onmouseover = function () { mouseOver() };
function mouseOver() {
    document.getElementById("d").style.color = "yellow";
}

document.getElementById("d").onmouseout = function () { mouseOut() };
function mouseOut() {
    document.getElementById("d").style.color = "black";
};

//PDCA C
document.getElementById("c").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("c").innerHTML = "Checagem do Projeto";
}
document.getElementById("c").onmouseover = function () { mouseOver() };
function mouseOver() {
    document.getElementById("c").style.color = "blue";
}

document.getElementById("c").onmouseout = function () { mouseOut() };
function mouseOut() {
    document.getElementById("c").style.color = "black";
};

//PDCA A
document.getElementById("a").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("a").innerHTML = "Identificação de correções";
}
document.getElementById("a").onmouseover = function () { mouseOver() };
function mouseOver() {
    document.getElementById("a").style.color = "green";
}

document.getElementById("a").onmouseout = function () { mouseOut() };
function mouseOut() {
    document.getElementById("a").style.color = "black";
};