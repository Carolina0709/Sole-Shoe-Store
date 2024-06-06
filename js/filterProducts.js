
import { conexionAPI } from "./conexionAPI.js";
import { createCard } from "./crud/showProducts.js";
import { setupPagination } from "./pagination.js";

async function filterProducts(event) {
    event.preventDefault();

    const dataSearch = document.querySelector("[data-search]").value;
    const search = await conexionAPI.findProducts(dataSearch);

    const list = document.querySelector("[data-list]");

    

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    if (search.length == 0) {
        list.innerHTML = `<div class="ctn-error p-5 rounded d-flex justify-content-center align-items-center flex-column">
                            <i class="bi bi-bag-x-fill display-1"></i>
                            <h2 class="color-brown display-5 text-center">No hay productos con ese nombre</h2>
                          </div>`;
    }
    

    search.forEach(product => list.appendChild(createCard(product.name, product.price, product.image, product.id)));

    
    const productsPerPage = 8;
    setupPagination(productsPerPage, search.length);
}

const button = document.querySelector("[data-search-btn]");
button.addEventListener("click", event => filterProducts(event));
