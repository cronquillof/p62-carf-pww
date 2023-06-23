function seleccionar_opcion(opcion){
    var opcion_1 = document.getElementById('opcion1')
    var opcion_2 = document.getElementById('opcion2')

    if (opcion == 1) {
        opcion_1.style.zIndex = 2
        opcion_2.style.zIndex = 1
    } else {
        opcion_1.style.zIndex = 1
        opcion_2.style.zIndex = 2
    }
}