import  { vistas } from "./datos.js"

function animar( clase ){
    let base_de_datos = vistas.informacion
    let vista_ahora = vistas.vista_actual

    let datos_ahora = base_de_datos[vista_ahora]
    let id_ahora = datos_ahora.id_section

    let seccion = document.getElementById(id_ahora)

    seccion.className = clase;
}

export default animar;