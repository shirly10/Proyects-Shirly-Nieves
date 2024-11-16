function mostrarNombre(evento) {
    evento.preventDefault(); 

    let Nombre = document.getElementById("campoNombre").value;
    let Edad = document.getElementById("campoEdad").value;
    let Cédula = document.getElementById("campoCedula").value;
    let Pedido = document.getElementById("campoPedido").value;
    let Cantidad = document.getElementById("campoCantidad").value;
    let Dirección = document.getElementById("campoDireccion").value;

    if (Edad < 18) {
        alert("Debe ser mayor de edad para realizar un pedido.");
    }

    let confirmar = confirm(`¿Desea confirmar este pedido? \n
        Pedido de: ${Nombre} \n
        Edad: ${Edad} \n
        Cédula: ${Cédula} \n
        Pedido: ${Pedido} \n
        Cantidad: ${Cantidad} \n
        Dirección: ${Dirección}`);

    if (confirmar) {
        alert(`Información ingresada:
            Pedido de: ${Nombre}
            Edad: ${Edad}
            Cédula: ${Cédula}
            Pedido: ${Pedido}
            Cantidad: ${Cantidad}
            Dirección: ${Dirección}
        `);
    } else {
        alert("El pedido no ha sido enviado.");
    }
}
