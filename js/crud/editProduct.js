import { conexionAPI } from "../conexionAPI.js";

const editForm = document.querySelector('[data-modal-form]');

editForm.addEventListener('submit', async (event) => {
    await handleEditFormSubmit(event);
});

async function handleEditFormSubmit(event) {
    event.preventDefault();

    const id = editForm.dataset.id;
    const name = document.querySelector('[data-modal-name]').value;
    const price = document.querySelector('[data-modal-price]').value;
    const image = document.querySelector('[data-modal-image]').value;

    // Validar todos los campos del formulario antes de enviar
    if (!editForm.checkValidity()) {
        // Disparar eventos de blur para mostrar errores de validación en todos los campos
        [name, price, image].forEach(input => input.dispatchEvent(new Event('blur')));
        return;
    }

    try{
        const result = await conexionAPI.editProduct(id, name, price, image);

        if (result) {
        // Actualizar la tarjeta correspondiente en el DOM
             const card = document.querySelector(`.ctn-card[data-id="${id}"]`);
                if (card) {
                    card.querySelector('.card-title').textContent = result.name;
                    card.querySelector('.card-text').textContent = result.price;
                    card.querySelector('.card-img-top').src = result.image;
                }

        } else {
            console.error('Failed to update product');
        }
	}catch(e){
		alert(e);
	}

}

