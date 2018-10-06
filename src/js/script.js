var texto = "Welcome, my name is Ewerton";
var result;
var count = 0;
function digitar() {
    result = document.getElementById("welcome");
    window.setTimeout(function () {
        inserir(texto[count])
    }, 200);
}
function inserir(letra) {
    result.innerHTML += letra;
    count++;
    if (count < texto.length)
        window.setTimeout(function () {
            inserir(texto[count])
        }, 90);
}

window.onload = digitar
