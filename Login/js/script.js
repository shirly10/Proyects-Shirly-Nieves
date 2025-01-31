// function mostrarNombre(){
//     let Nombre = document.getElementById("campoNombre").value;
//     let Apellido = document.getElementById("campoApellido").value;
//     let User = document.getElementById("campoUser").value;
//     let Email = document.getElementById("campoEmail").value;
//     let Contraseña = document.getElementById("campoContraseña").value;

//     alert(` informacion ingresada: \n
//         Nombre: ${Nombre} \n
//         Apellido: ${Apellido} \n
//         User: ${User} \n
//         Email: ${Email} \n
//         Contraseña: ${Contraseña} \n
//     `);

// }

// function mostrarNombre() {
//     const { campoNombre, campoApellido, campoUser, campoEmail, campoContraseña } = document;

//     const Nombre = campoNombre.value;
//     const Apellido = campoApellido.value;
//     const User = campoUser.value;
//     const Email = campoEmail.value;
//     const Contraseña = campoContraseña.value;

//     alert(`Información ingresada: \n
//         Nombre: ${Nombre} \n
//         Apellido: ${Apellido} \n
//         User: ${User} \n
//         Email: ${Email} \n
//         Contraseña: ${Contraseña} \n
//     `);
// }


function mostrarNombre() {
    const { value: Nombre } = document.getElementById("campoNombre");
    const { value: Apellido } = document.getElementById("campoApellido");
    const { value: User } = document.getElementById("campoUser");
    const { value: Email } = document.getElementById("campoEmail");
    const { value: Contraseña } = document.getElementById("campoContraseña");

    alert(`Información ingresada: \n
        Nombre: ${Nombre} \n
        Apellido: ${Apellido} \n
        User: ${User} \n
        Email: ${Email} \n
        Contraseña: ${Contraseña} \n
    `);
}
