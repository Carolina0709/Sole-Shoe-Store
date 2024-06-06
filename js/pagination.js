import { showProducts } from "./crud/showProducts.js";

const paginationContainer = document.querySelector(".pagination");

export function setupPagination(productsPerPage, totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement("li");
        pageItem.classList.add("page-item");
        const pageLink = document.createElement("a");
        pageLink.classList.add("page-link", "color-brown");
        pageLink.href = "#";
        pageLink.textContent = i;
        pageLink.addEventListener("click", () => showProducts(i));
        pageItem.appendChild(pageLink);
        paginationContainer.appendChild(pageItem);
    }
}