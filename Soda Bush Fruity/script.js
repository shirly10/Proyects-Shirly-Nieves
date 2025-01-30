import { vistas } from "./datos.js";
import animar from "./animar.js";
import { ir_a_izquierda, ir_a_derecha } from "./desplazar.js";

const botonIzq = document.getElementById("btn-left")
const botonDer = document.getElementById("btn-right")

let toqueInicio = 0;
let toqueFin = 0;

botonDer.style.setProperty("--color-boton", "red") 

vistas.informacion.forEach(
    (fruta)=>{
        document.getElementById(fruta.id_section).style.backgroundColor = fruta.color_fondo;
        document.getElementById(fruta.id_section).innerHTML += `<h2>${fruta.section}</h2>`;
        document.getElementById(fruta.id_section).querySelector("h2").style.opacity = 0; 
    }
);

animar("show-all");

actualizar_vista();


botonDer.addEventListener("click", () => ir_a_derecha(actualizar_vista));

botonIzq.addEventListener("click", () => ir_a_izquierda(actualizar_vista));


document.addEventListener("keydown",
    (event) => {
        if (event.key == 'ArrowLeft'){
            ir_a_izquierda(actualizar_vista);
        }
        if (event.key == 'ArrowRight'){
            ir_a_derecha(actualizar_vista);
        }
    }
);

document.addEventListener("touchstart", 
    (event) => {
        toqueInicio = event.changedTouches[0].clientX;
    }    
);

document.addEventListener("touchend", 
    (event) => {
        toqueFin = event.changedTouches[0].clientX;
        if ( toqueInicio - toqueFin > 100 ) {
            ir_a_derecha(actualizar_vista);
        }
        if ( toqueInicio - toqueFin < -100 ) {
            ir_a_izquierda(actualizar_vista);
        }
    }
);

function actualizar_vista(){
    if(vistas.vista_actual >0){
        botonIzq.style.opacity = 1;
    }else{
        botonIzq.style.opacity = 0;
    }

    if(vistas.vista_actual < vistas.informacion.length -1){
        botonDer.style.opacity = 1;
    }else{
        botonDer.style.opacity = 0;
    }

    if (vistas.vista_actual < vistas.informacion.length - 1){
        let vista_siguiente = vistas.informacion[vistas.vista_actual + 1];
        botonDer.style.setProperty("--color-boton", vista_siguiente.color_fondo);
    }

    if (vistas.vista_actual > 0){
        let vista_siguiente = vistas.informacion[vistas.vista_actual - 1];
        botonIzq.style.setProperty("--color-boton", vista_siguiente.color_fondo);
    }

    document.querySelector("h1").style.color = vistas.informacion[ vistas.vista_actual ].color_titulo;

    document.getElementById("vistas").style.left = vistas.informacion;

    document.querySelector("#vistas").style.left = `${vistas.vista_actual * -100}%`;

    document.querySelector('.lata img[alt="Etiquetas"]').style.left = `${vistas.vista_actual * -100}%`;
}