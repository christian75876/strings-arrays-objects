
const products = []

const addProduct = (nombre, precio, cantidad, descripcion) => {
    
    products[nombre] = {
        name: nombre,
        price: precio,
        quantity: cantidad,
        description: descripcion,
    }
}