// deleteProduct.js
import { conexionAPI } from "../conexionAPI.js";

const list = document.querySelector('[data-list]');

list.addEventListener('click', async (e) => {
    const deleteButton = e.target.closest('.delete-btn');
    if(deleteButton){
        deleteButton.disabled = true; // Deshabilitar el botón de eliminación temporalmente
        await handleDeleteButtonClick(e, deleteButton);
        deleteButton.disabled = false; // Volver a habilitar el botón de eliminación
    }
});

async function handleDeleteButtonClick(e, deleteButton) {
    const productElement = deleteButton.closest('.ctn-card');
    const productId = productElement.dataset.id;

    try{
        await conexionAPI.deleteProduct(productId);
        // Remover el elemento del DOM después de eliminar
        productElement.remove();
	}catch(e){
		alert(e);
	}

    
    
}
