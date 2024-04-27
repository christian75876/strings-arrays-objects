
const products = {}



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
    
}

const duplicate = () => {
    let find = prompt('Ingresa el nombre del producto que deseas duplicar');
    let found = Object.values(products).filter(product => product.name.toLowerCase().includes(find));

    if (found.length > 0) {
        let count = 0;
        let nombre = '';
        let precio = '';
        let cantidad = '';
        let des = '';
        let duplicatedName = find;
        found.forEach(product => {
            while (products[duplicatedName]) {
                count++;
                duplicatedName = `${product.name} copy ${count}`;
            }
                nombre = duplicatedName;
                precio = product.price;
                cantidad = product.quantity;
                des = product.description;
        });
        products[duplicatedName] = {
            name: nombre,
            price: precio,
            quantity: cantidad,
            description: des
        };
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
                         7.Eliminar producto
                         8.Cálculo valor inventario
                         9.Menu de ordenamiento de productos
                         10.Identificación de productos con malas palabras
                         11.Reporte general de productos`);
    return select;
}


//******************************** */
//Busqueda de productos
const search = () => {
    let find = prompt(`Deseas filtrar la busqueda por medio de:
                    1.Visualizar todos los ariculos por tabla.
                    2.Realizar busqueda por nombre.
                    3.Visualizar articulos por rango de precio`);
    if(find.match(/^[1-3]$/)){
        selectSearch(find)
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

//Busqueda por nombre
const searchName = () => {
    let find = prompt('Ingrese el nombre del producto:').toLocaleLowerCase();
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

//Busqueda por rango de precio
const searchPrice = () => {
    let min = Number(prompt('Ingrese el valor minimo de busqueda'));
    let max = Number(prompt('Ingrese el Valor maximo de busqueda'));

    let foundPrice = Object.values(products).filter(product => product.price >= min && product.price <= max)
    console.table(foundPrice)
    return
}

//Actualizacion de productos
const updateProduct = () => {
    let found = searchName()
    let find = prompt(`Ingrese numero:
                    1.Editar nombre.
                    2.Editar precio.
                    3.Editar cantidad.
                    4.Editar descripción.`)
    switch(find){
        case '1':
            found.name = prompt('Ingrese nuevo nombre a asignar');
            break;
        case '2':
            found.price = prompt('Ingrese el nuevo precio a asignar.')
            break;
        case '3':
            found.quantity = prompt('Ingrese la nueva cantidad a asignar.')
            break;
        case '4':
            found.quantity = prompt('Ingrese la nueva descripción a asignar.')
            break;
        default:
            alert('Opcion no valida')
            break;
    }
}

//Eliminación de productos
const deleteProduct = () => {
    let foundDelete = searchName();
    if(foundDelete){
        delete products[foundDelete.name];
        console.log('Elemento eliminado.');
    }
}

//Venta de producto
const sell = () => {
    let find = searchName();
    let quantityRequied = Number(prompt('Ingrese la cantida de producto que desea comprar:'));
    if(quantityRequied < Number(find.quantity)){
        alert(`La cantidad tiene un costo de: ${quantityRequied * Number(find.price)}`)
        find.quantity -= quantityRequied;
    }else{
        alert('No se dispone de la cantidad suficiente')
    }

}

//Compra de producto
const buy = () => {
    let find = searchName();
    let quantitybuy = Number(prompt('Ingrese la cantidad de propducto que comprara para actualizar el inventario:'));
    find.quantity = Number(find.quantity) + quantitybuy
    alert('Se a actualizado correctamente el inventario');
}

//Sumatoria de inventario
const sumInventory = () => {
    let total = 0;
    Object.values(products).forEach(product =>{
        let aux = Number(product.quantity * product.price);
        total += aux;
    })
    alert(`El total de la sumatoria del inventario es: ${total}`);
}

//Menu ordenamiento de productos
const selectOrder = (num) => {
    switch(num){
        case '1':
           let sortProducts = Object.values(products).sort((a, b) => {
                return order === 'asc' ? a.price - b.price : b.price - a.price;
            });
            console.table(sortProducts);
            break;
        case '2':
            let sortProductsReverse = Object.values(products).sort((a,b) => {
                return order === 'des' ? b.price - a.price : a.price - b.price;
            })
            console.table(sortProductsReverse);
            break;
        case '3':
            let sortQuantityMax = Object.values(products).sort((a,b) => {
                return order === 'max' ? a.quantity - b.quantity : b.quantity - a.quantity;
            });
            console.table(sortQuantityMax);
            break;
        case '4': 
            let sortQuantityMin = Object.values(products).sort((a,b) => {
                return order === 'min' ? b.quantity - a.quantity : a.quantity - b.quantity;
            })
            console.table(sortQuantityMin);
            break;
        case '5':
            let sortName = Object.values(products).sort((a,b) => a.name.localeCompare(b.name));
            console.table(sortName);
            break
        default:
            alert('ingreso un valor no valido!!!');
    }

}


const order = () => {
    let select = prompt(`Ingrese numero segun:
                        1.Odenar de mayor a menor por precio.
                        2.Ordenar de menor a mayor por precio.
                        3.Ordenar primero los productos con menor cantidad.
                        4.Ordenar primero los productos con mayor cantidad.
                        5.Ordenar alfabeticamente.`)
    if(select.match(/^[1-5]$/)){
        selectOrder(select);
    }
    else{
        alert('Ingreso un valor no valido');

    }
}

const badWordsArray = ['groseria', 'insulto']

//Busqueda de las malas palabras
const badWords = () => {
    Object.values(products).forEach((product) => {
        let description = product.description;
        badWordsArray.forEach((badWord) => {
            const regex = new RegExp(badWord, 'gi'); 
            description = description.replace(regex, '*'.repeat(badWord.length));
        });
        console.log(`Producto: ${product.name} - Precio: ${product.price} - Cantidad: ${product.quantity} - Descripción: ${description}`);
    });
}


//reporte general
const generateReport = () => {
    const totalProducts = Object.keys(products).length;
    const totalInventoryValue = Object.values(products).reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    const sortedProductsByPrice = Object.values(products).sort((a, b) => a.price - b.price);
    const mostExpensiveProducts = sortedProductsByPrice.slice(-3).reverse();
    const cheapestProducts = sortedProductsByPrice.slice(0, 3);
    const sortedProductsByQuantity = Object.values(products).sort((a, b) => a.quantity - b.quantity);
    const productsWithMostQuantity = sortedProductsByQuantity.slice(-3).reverse();
    const productsWithLeastQuantity = sortedProductsByQuantity.slice(0, 3);
    const blacklistedProducts = [];
    
    Object.values(products).forEach(product => {
        badWordsArray.forEach(badWord => {
            if (product.description.toLowerCase().includes(badWord)) {
                blacklistedProducts.push(product);
            }
        });
    });

    console.log(`--- Reporte General de Productos ---`);
    console.log(`Total de Productos: ${totalProducts}`);
    console.log(`Valor Total del Inventario: $${totalInventoryValue}`);
    console.log(`--- Productos Más Caros ---`);
    mostExpensiveProducts.forEach(product => {
        console.log(`${product.name}: $${product.price}`);
    });
    console.log(`--- Productos Más Baratos ---`);
    cheapestProducts.forEach(product => {
        console.log(`${product.name}: $${product.price}`);
    });
    console.log(`--- Productos con Mayor Cantidad ---`);
    productsWithMostQuantity.forEach(product => {
        console.log(`${product.name}: ${product.quantity} unidades`);
    });
    console.log(`--- Productos con Menor Cantidad ---`);
    productsWithLeastQuantity.forEach(product => {
        console.log(`${product.name}: ${product.quantity} unidades`);
    });
    console.log(`--- Productos con Malas Palabras en la Descripción ---`);
    blacklistedProducts.forEach(product => {
        console.log(`${product.name}: ${product.description}`);
    });
};


let ok = true
while(ok){
    console.log(products);
    switch(menu()){
        case '1':
            addProduct();
            break;
        case '2':
            duplicate();
            break;
        case '3':
            search();
            break;
        case '4':
            updateProduct();
            break;
        case '5':
            sell();
            break;
        case '6':
            buy()
            break;
        case '7':
            deleteProduct();
            break;
        case '8':
            sumInventory();
            break;
        case '9':
            order();
            break;
        case '10':
            badWords();
            break;
        case '11':
            generateReport();
        default:
            ok = false
            break;
    }
}