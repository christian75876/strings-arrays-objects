//Division del nombre 
const spaceBlank = (fullName) =>{
    let space = fullName.split(' ');
    name.push(space[0]);
    lastName.push(space[1]);
}
//Asignacion de usuario
const addUserNames = (name, lastName) =>{
    let newUser = name.slice(0, 3) + lastName.slice(0, 3);
    return{
        username: newUser,
        email: userName + domain
    }
}

let fullName = prompt('Ingresa tu nombre y apellido').toLowerCase();

//Respaldo de la informacion;
const domain = '@myDomain.com';
const name = [];
const lastName = [];
const userName = {};



let newUser = addUserNames(name[0], lastName[0]);

userName[newUser.username] = newUser;
console.log(userName);

spaceBlank(fullName);





