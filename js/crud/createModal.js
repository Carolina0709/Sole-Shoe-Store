import { conexionAPI } from "../conexionAPI.js";

const form = document.querySelector("[data-form]");

async function createProduct(event){

	event.preventDefault();

	const name = document.querySelector("[data-name]").value;
	const price= document.querySelector("[data-price]").value;
	const image = document.querySelector("[data-image]").value;
	
    await conexionAPI.sendProduct(name, price, image);
    window.location.href = "../../pages/createdProduct.html";
}

form.addEventListener("submit", event => createProduct(event));