export default function isValidPrice(input) {
    // Expresión regular que verifica si el precio contiene números normales o decimales
    const priceRegex = /^\d+(\.\d+)?$/;

    // Verificar si el precio cumple con el patrón de números normales o decimales
    if (priceRegex.test(input.value)) {
        console.log("True");
    } else {
        input.setCustomValidity("El precio debe ser un número válido. ");
    }
}