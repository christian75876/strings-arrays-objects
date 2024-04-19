//Division del nombre
const spaceBlank = (fullName) => {
  let fullNames = fullName.split(" ");
  let name =  fullNames[0].substring(0,3);
  let lastName = fullNames[1].substring(0,3);
  let newUser = name + lastName;
  let email = newUser + domain;
  return {newUser, email}
};
//Asignacion de usuario
const addUserNames = (user) => {  
  let contador = '';
  while(users.hasOwnProperty(user.newUser + contador)){
    contador++;
  }
  user.newUser = user.newUser + contador;
  user.email = user.newUser + domain;

  users[user.newUser] = user.email

};

//Respaldo de la informacion;
const domain = "@myDomain.com";
const users = {};

/**************************************
 * *************************************/
let follow = confirm("Desea ingresar un usuario?");

while (follow) {
  let fullName = prompt("Ingresa tu nombre y apellido").toLowerCase();
  const newUser = spaceBlank(fullName);
  addUserNames(newUser);
 console.log(users)
}