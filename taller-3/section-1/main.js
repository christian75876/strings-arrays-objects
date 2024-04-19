//Division del nombre
const spaceBlank = (fullName) => {
  let space = fullName.split(" ");
  name.push(space[0]);
  lastName.push(space[1]);
};
//Asignacion de usuario
const addUserNames = (name, lastName, isCreated = false) => {
  let newUser = name.slice(0, 3) + lastName.slice(0, 3);
  console.log(newUser);
  if (isCreated) {
    return {
      username: newUser,
      email: newUser + "1" + domain,
    };
  } else {
    return {
      username: newUser,
      email: newUser + domain,
    };
  }
};

//Respaldo de la informacion;
const domain = "@myDomain.com";
const name = [];
const lastName = [];
const users = {};

/**************************************
 * *************************************/
let follow = confirm("Desea ingresar un usuario?");
let count = 0;

while (follow) {
  let fullName = prompt("Ingresa tu nombre y apellido").toLowerCase();
  let comparation;
  spaceBlank(fullName);

  let newUser = addUserNames(name[count], lastName[count], (isCreated = false));
  comparation = Object.keys(users);
  
  if (comparation.includes(newUser.username)) {
    newUser = addUserNames(name[count], lastName[count], (isCreated = true));
  }
  users[newUser.username] = newUser;
  console.log(newUser);
  
  count++;
}
