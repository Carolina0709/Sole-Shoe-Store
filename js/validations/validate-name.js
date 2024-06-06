export default function isValidName(input) {
    // Expresión regular que verifica si el nombre contiene solo letras y espacios
    const nameRegex = /^[a-zA-Z\s]+$/;

    // Verificar si el nombre cumple con el patrón de letras y espacios
    if (nameRegex.test(input.value)) {
        console.log("True");
    } else {
        input.setCustomValidity("El nombre solo puede contener letras y espacios. ");
    }
}
