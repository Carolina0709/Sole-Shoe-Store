async function showProducts(){
	const conexion = await fetch("http://localhost:3001/products");
	
	const convertedConnection = await conexion.json();
	return convertedConnection;
}

async function sendProduct(name, price, image){
    const conexion = await fetch("http://localhost:3001/products", {
        method: "POST", 
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            name:name,
            price:`MNX ${price}`,
            image:image
        })
    });
        
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error");
    }

    const convertedConnection = await conexion.json();
    return convertedConnection;
}

async function deleteProduct(id){
    
    const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE",
        headers: {"Content-type": "application/json"}
    });

    if (!response.ok) {
        throw new Error(`Failed to delete product with ID ${id}:`);
    }

    const result = await response.json();
    console.log(`Product with ID ${id} deleted successfully.`);
    return result;    
    
}

async function editProduct(id, name, price, image){
   
    const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            name:name,
            price:`MNX ${price}`,
            image:image
        })
    });

    if (!response.ok) {
        throw new Error(`Failed to edit product with ID ${id}:`);
    }

    const result = await response.json();
    console.log(`Product with ID ${id} edited successfully.`);
    return result;    
   
}

async function findProducts(keyword){
	const conexion = await fetch(`http://localhost:3001/products?q=${keyword}`);
	const convertedConnection = await conexion.json();
	
	return convertedConnection;
}

export const conexionAPI = {
	showProducts,
    sendProduct,
    deleteProduct,
    editProduct,
    findProducts
}