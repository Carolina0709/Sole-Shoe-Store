export default function isValidName(input) {
    // Expresión regular que verifica si el nombre contiene solo letras
    const nameRegex = /^[a-zA-Z]+$/;

    // Verificar si el nombre cumple con el patrón de solo letras
    if (nameRegex.test(input.value)) {
        console.log("True");
    } else {
        input.setCustomValidity("El nombre solo puede contener letras. ");
    }
}
