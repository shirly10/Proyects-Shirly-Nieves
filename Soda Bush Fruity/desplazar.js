import { vistas } from "./datos.js"
import animar from "./animar.js"

export function ir_a_izquierda(callback) {
    if(vistas.vista_actual > 0){
        animar("hide-all");
        vistas.vista_actual --;
        animar("show-all");
        callback();
    }
}

export function ir_a_derecha(callback) {
    if(vistas.vista_actual < vistas.informacion.length - 1){
        animar("hide-all");
        vistas.vista_actual ++;
        animar("show-all");
        callback();
    }
}

