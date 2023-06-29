var div_cajita = document.getElementById('cajita')
var distancia = [0, 0]
var es_presionado = false

div_cajita.addEventListener('mousedown', function(e){
    es_presionado = true

    distancia = [
        div_cajita.offsetLeft - e.clientX,
        div_cajita.offsetTop - e.clientY
    ]
}, true)

div_cajita.addEventListener('mouseup', function(e){
    es_presionado = false
}, true)

div_cajita.addEventListener('mousemove', function(e){
    if (es_presionado) {
        div_cajita.style.left = (e.clientX + distancia[0]) + 'px'
        div_cajita.style.top = (e.clientY + distancia[1]) + 'px'
    }
}, true)