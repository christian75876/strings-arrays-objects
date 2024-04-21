const  events = [];
let unicode

const validateSelect = /[1-5].{1}/

const createEvent = (nombre, descriptionEvent, fecha = new Date()) => {
    unicode++
    evento[evento.name] = {
        id: unicode,
        name: nombre,
        date: fecha,
        description: descriptionEvent
    }
}

const menu = () => {
    let select = prompt(`Ingresa el numero segun lo que desees ralizar: \n
                    1. Crear evento.
                    2. Listar evento.
                    3. Realizar busqueda.
                    4. Actualizar evento.
                    5. Eliminar evento`).test(validateSelect);
    if(!validateSelect) alert('As ingresado un valor no valido debe ser de 1 a 5 y un unico numero');

       

    return select;
}

while(true){
    switch (menu()){
        case 1:
            let nombre = prompt('Ingrese nombre del evento');
            let descriptionEvent = prompt('Ingrese la descripción del evento')
            let fecha = prompt('Ingrese la fecha del evento.')
            createEvent(nombre, descriptionEvent, fecha)
    }
}