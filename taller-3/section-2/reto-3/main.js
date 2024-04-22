
const products = []

//Ingreso de producto
const addProduct = (nombre, precio, cantidad, descripcion) => {
    products[nombre] = {
        name: nombre,
        price: precio,
        quantity: cantidad,
        description: descripcion,
    }
}

const duplicate = () => {
    let find = prompt('Ingresa el nombre del producto que deseas duplicar')
    let found = Object.values(products).filter(product => product.name.toLocaleLowerCase().includes(find));
    let count = 0
    if(found.length > 0){
        found.forEach(product => {
            count++;
        })
        return count
    }else{
        alert('No existen productos para duplicar');
        return;
    }
}

//******************************** */
//Busqueda de productos
const search = () => {
    let find = prompt(`Deseas realizar la busqueda por medio de:
                    1.Visualizar la tabla de todos los ariculos
                    2.Realizar busqueda por nombre.
                    3.Visualizar articulos por rango de precio`);
    if(find.match(/^[1-3]$/)){
        selectSearch(find)
    }
}
//Busqueda por nombre
const searchName = () => {
    let find = prompt('Ingrese el nombre del producto que deseas buscar:').toLocaleLowerCase();
    let foundProduct = Object.values(products).filter(product => product.name.toLowerCase().includes(find));

    if(foundProduct.length > 0){
        foundProduct.forEach(foundProduct => {
            console.log(`Producto encontrado: ${foundProduct.name}
                        Precio del producto: ${foundProduct.price}
                        Cantidad del producto: ${foundProduct.quantity}
                        Descripcion del producto: ${foundProduct.descripcion}`);
        })
        return foundProduct[0];
    }else{
        alert('No se encontraron productos con ese nombre');
        return
    }
}

const selectSearch = (search) => {
    switch(search){
        case '1':
            console.table(products);
            break;
        case '2':
            searchName();
            break;
        case '3':
            searchPrice();
            break;

    }
}
