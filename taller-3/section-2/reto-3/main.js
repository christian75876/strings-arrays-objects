
const products = []


//Ingreso de producto
const addProduct = () => {
    let nombre = prompt('Ingrese nombre del producto:');
    let precio = parseFloat(prompt('Ingrese Precio del producto:'));
    let cantidad = parseInt(prompt('Ingrese la cantidad de unidades de ese producto:'))
    let descripcion = prompt('Ingrese la descripcion del producto a ingresar:');
    products[nombre] = {
        name: nombre,
        price: precio,
        quantity: cantidad,
        description: descripcion,
    }
    console.log(products);

}

// const duplicateProduct = () => {
//     let find = prompt('Ingresa el nombre del producto que deseas duplicar')
//     let foundProduct = Object.values(products).find(product => product.name.toLowerCase().includes(find));

//     if (foundProduct) {
//         // Duplicar el producto
//         let count = 1;
//         let duplicatedName = `${foundProduct.name} - copy ${count}`;
//         while (products[duplicatedName]) {
//             count++;
//             duplicatedName = `${foundProduct.name} - copy ${count}`;
//         }

//         products[duplicatedName] = {
//             name: duplicatedName,
//             price: foundProduct.price,
//             quantity: foundProduct.quantity,
//             description: foundProduct.description,
//         };

//         console.log(`Producto duplicado: ${duplicatedName}`);
//     } else {
//         alert('No se encontró el producto para duplicar');
//     }
// }

//Duplicación de productos

// const duplicate = () => {
//     let find = prompt('Ingresa el nombre del producto que deseas duplicar')
//     let found = Object.values(products).filter(product => product.name.toLocaleLowerCase().includes(find));
//     let count = 0
//     if(found.length > 0){
//         found.forEach(product => {
//             count++;
//         })
//         products[found.name] = {
//             name: found.name += 'copy' + count,
//             price: found.price,
//             quantity: found.quantity,
//             descripcion: found.description
//         }

//     }else{
//         alert('No existen productos para duplicar');
//         return;
//     }
// }

const duplicate = () => {
    let find = prompt('Ingresa el nombre del producto que deseas duplicar');
    let found = Object.values(products).filter(product => product.name.toLowerCase().includes(find));

    if (found.length > 0) {
        let count = 1;
        found.forEach(product => {
            let duplicatedName = `${product.name} copy ${count}`;
            while (products[duplicatedName]) {
                count++;
                duplicatedName = `${product.name} copy ${count}`;
            }
            products[duplicatedName] = {
                name: duplicatedName,
                price: product.price,
                quantity: product.quantity,
                description: product.description
            };
            count++;
        });
        console.log(products);
    } else {
        alert('No existen productos para duplicar');
    }
};



/**Menu de ingreso de acción */
const menu = () =>{
    let select =  prompt(`Ingrese el numero segun acción a realizar:
                         1.Agregar producto
                         2.Duplicar producto
                         3.Menu de visualizacón de producto
                         4.Actualización de producto
                         5.Venta de producto
                         6.Compra de producto
                         8.Eliminar producto
                         9.Cálculo valor inventario
                         10.Menu de ordenamiento de productos
                         11.Identificación de productos con malas palabras
                         12.Reporte general de productos`);
    return select;
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

let ok = true
while(ok){
    switch(menu()){
        case '1':
            addProduct();
            break;
        case '2':
            duplicate()
        // case '3':

    }
}