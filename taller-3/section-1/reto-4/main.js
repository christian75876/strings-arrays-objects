try {
const  events = [];
let unicode = 0

const validateSelect = /[1-5].{1}/

//Creación de evento
const createEvent = (nombre, descriptionEvent, fecha = new Date()) => {
    unicode++
    events[nombre] = {
        id: unicode,
        name: nombre,
        date: fecha,
        description: descriptionEvent
    }
}
//Menu con validacion.
const menu = () => {
    let select = prompt(`Ingresa el numero segun lo que desees ralizar: \n
                    1. Crear evento.
                    2. Listar evento.
                    3. Realizar busqueda.
                    4. Actualizar evento.
                    5. Eliminar evento`)
    if(!validateSelect) alert('As ingresado un valor no valido debe ser de 1 a 5 y un unico numero');
    else{
        return select;
    }
}
//ingreso de datos por usuarios
const requests = () => {
    let nombre = prompt('Ingrese nombre del evento').toLocaleLowerCase();
            let descriptionEvent = prompt('Ingrese la descripción del evento')
            let fecha = prompt('Ingrese la fecha del evento.');
            createEvent(nombre, descriptionEvent, fecha);
}
//listar evento
const list = ()=> {
    eventValues = Object.values(events)
    if (eventValues.length > 0) {
        console.table(eventValues);
    }else{
        alert('No hay eventos que mostrar.');
    }
}
//buscar evento
const search = () =>{
    let find = prompt('Ingrese el nombre del evento que deseas buscar:').toLocaleLowerCase();
    let foundEvents = Object.values(events).filter(event => event.name.toLowerCase().includes(find));

    if(foundEvents.length > 0){
        foundEvents.forEach(foundEvent => {
            console.log(`Evento encontrado ${foundEvent.name}
                        Fecha del evento: ${foundEvent.date}
                        Descripcion del evento: ${foundEvent.description}`);
        })
        return foundEvents[0];
    }else{
        alert('No se encontraron nombres del evento');
        return
    }
}
//Editar un evento
const editRequest = () => {
    let found = search();
    if(found != null || found != undefined){
        console.log(found)
        let select = prompt(`Ingrese que desea realizar:
                            1.Modificar nombre del evento.
                            2.Modificar fecha del evento.
                            3.Modificar desripción del evento.
                            `);
        edit(select,found)
    }else{
        alert('No cuenta se encuentra Evento con ese nombre.');
        return
    }
}

const edit = (select,found) => {
    console.log(`Desde funcion edit...`)
    switch(select){
        case '1':
            found.name = prompt('Ingrese el nuevo nombre del evento:');
            break;
        case '2':
            found.date = prompt('Ingrese la nueva fecha del evento:');
            break;
        case '3':
            found.description = prompt('Ingrese la nueva descripcion del evento:')
            break;
    }
}
//Eliminar un evento.
const deleteEvent = () =>{
    let select = search();
    if(select){
        delete events[select.name];
        console.log('Evento eliminado');
    }
}

while(true){
    switch (menu()){
        case '1':
            requests();
            break;
        case '2':
            list();
            break;
        case '3':
            search();
            break;
        case '4':
             editRequest();
             break;
        case '5':
            deleteEvent();
            break;
        default:
            alert('Ha ingresado un numero no valido!')
    }
}
} catch (error) {
 console.error(error)   
}