let password = prompt(
  "Ingresa la contraseña debe ser:\n#Minimo a 8 caracteres\n#Contener 8 caracteres\n#Contener un numero minimo\n#Contener al menos una letra\n#Contener almenos un caracter especial"
);

let  requied = 'Es necesario que que tenga';

const hasMinLength = /.{8,}./.test(password);
const leter = /[a-zA-Z]/.test(password);
const number = /[0-9]/.test(password);
const symbol = /[!#$@%(=_|~`\[-{}:.,'"<>?)&*+/]/.test(password);

if (hasMinLength && leter && number && symbol) {
  alert("Contrasela ingresada correctamente");
} else {
  if (hasMinLength) {
    requied.push(hasMinLength);
  }
  if (!leter) {
    requied += 'letras'
  }
  if (!number) {
    requied += "numero";
  }
  if (!symbol) {
    requied.push(symbol);
  }
}
console.log(requied);
