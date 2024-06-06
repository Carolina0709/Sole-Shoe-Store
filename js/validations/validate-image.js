export default function isValidImageUrl(input) {
    const imageExtensions = /\.(png|jpg|jpeg|gif|bmp|svg)$/i;
    const url = input.value;

    // Verificar si la URL cumple con el patrón de una URL válida y termina con una extensión de imagen
    if (/^(ftp|http|https):\/\/[^ "]+$/.test(url) && imageExtensions.test(url)) {
        console.log("True");
    } else {
        input.setCustomValidity("La URL no es válida.");
    }
}
