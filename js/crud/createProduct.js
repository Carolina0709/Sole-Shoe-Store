import { conexionAPI } from "../conexionAPI.js";

const form = document.querySelector("[data-form]");

async function createProduct(event){
    event.preventDefault();

    const name = document.querySelector("[data-name]");
    const price= document.querySelector("[data-price]");
    const image = document.querySelector("[data-image]");

    // Validar todos los campos del formulario antes de enviar
    if (!form.checkValidity()) {
        // Disparar eventos de blur para mostrar errores de validación en todos los campos
        [name, price, image].forEach(input => input.dispatchEvent(new Event('blur')));
        return;
    }

    try {
        await conexionAPI.sendProduct(name.value, price.value, image.value);
        window.location.href = "../../pages/createdProduct.html";
    } catch (e) {
        alert(e);
    }
}

form.addEventListener("submit", createProduct);
