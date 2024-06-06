import { conexionAPI } from "../conexionAPI.js";
import { setupPagination } from "../pagination.js";

const list = document.querySelector("[data-list]");
const productsPerPage = 8;

export function createCard(name, price, image, id ){
    const product = document.createElement("div");
    product.className = "ctn-card col-12 col-md-6 col-lg-3 mt-4";
    product.dataset.id = id;
    product.innerHTML=`
                <div class="card h-100">
                    <img src="${image}" class="card-img-top h-100" alt="Imagen de un tenis, con fondo claro">
                    <div class="card-body h-100 d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title color-brown">${name}</h5>
                            <p class="card-text">${price}</p>
                        </div>
                        <div class="w-100  d-flex justify-content-end">
                            <a href="#" class="edit-btn btn btn-primary me-2 btn-brown-light" data-bs-toggle="modal" data-bs-target="#editCard"><i class="bi bi-pencil"></i></a>
                            <a href="#" class="delete-btn btn btn-primary btn-brown"><i class="bi bi-trash-fill"></i></a>
                        </div>
                    </div>
                </div>`;
       
       
                    
              
    return product;
}


export async function showProducts(page = 1) {
    try {
        const apiList = await conexionAPI.showProducts();
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        const productsToShow = apiList.slice(start, end);

        list.innerHTML = '';

        if(apiList.length === 0){
            list.innerHTML = `<div class="ctn-error p-5 rounded d-flex justify-content-center align-items-center flex-column">
                            <i class="bi bi-bag-x-fill display-1"></i>
                            <h2 class="color-brown display-5 text-center">La lista de productos esta vacia</h2>
                          </div>`;
        }else {
            productsToShow.forEach(product => list.appendChild(createCard(product.name, product.price, product.image, product.id)));
        }
        
        setupPagination(productsPerPage, apiList.length);
    }catch{
        list.innerHTML = `<div class="ctn-error p-5 rounded d-flex justify-content-center align-items-center flex-column">
                            <i class="bi bi-exclamation-triangle-fill display-1"></i>
                            <h2 class="color-brown display-5 text-center">Ha ocurrido un problema con la conexión</h2>
                          </div>`;
    }
    
}

showProducts();
