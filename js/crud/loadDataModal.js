const list = document.querySelector('[data-list]');
const editModal = document.querySelector('[data-modal]');
const editForm = document.querySelector('[data-modal-form]');

list.addEventListener('click', (event) => {
    if (event.target.closest('.edit-btn')) {
        handleEditButtonClick(event);
    }
});

function handleEditButtonClick(event) {
    const button = event.target.closest('.edit-btn');
    const productElement = button.closest('.ctn-card');
    const id = productElement.dataset.id;
    const name = productElement.querySelector('.card-title').textContent;
    const price = productElement.querySelector('.card-text').textContent.replace('MNX ', '');
    const image = productElement.querySelector('.card-img-top').src;

    // Actualizar los campos del formulario en el modal
    document.querySelector('[data-modal-name]').value = name;
    document.querySelector('[data-modal-price]').value = price;
    document.querySelector('[data-modal-image]').value = image;

    // Guardar el ID en el formulario para usarlo más tarde
    editForm.dataset.id = id;

}
