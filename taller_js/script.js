function cargar_elementos(){
    var container = document.getElementById("container")
    var h1 = document.createElement("h1")
    var texto = document.createTextNode("Cristopher Ronquillo")
    h1.appendChild(texto)
    container.appendChild(h1)
}