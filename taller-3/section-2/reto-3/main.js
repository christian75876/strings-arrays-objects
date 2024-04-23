
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

//Busqueda por rango de precio
const searchPrice = () => {
    let min = Number(prompt('Ingrese el valor minimo de busqueda'));
    let max = Number(prompt('Ingrese el Valor maximo de busqueda'));

    let foundPrice = Object.values(products).filter(product => product.price >= min && product.price <= max)
    console.table(foundPrice)
}


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
            

    }
}