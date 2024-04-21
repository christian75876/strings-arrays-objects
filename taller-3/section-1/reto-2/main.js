try {
let password = prompt('Ingrese una contraseña segura debe contener:\nLetras mayusculas y minusculas\nContener numeros y caracteres especiales\nDebe ser minimo de 8 caracteres');

let message = 'ok' 

const letter = /[a-zA-Z]/.test(password);
const number = /[0-9]/.test(password);
const especial = /[!@#$%^&*()+=_\-{}\[\]:;"'?<>,.|\/\\~`]/.test(password);
// const size = password.length > 8;
const sizeRegularExpresion = /^.{8,}$/.test(password);

if(!letter || !number || !especial || !sizeRegularExpresion || !sizeRegularExpresion)message = 'No as ingresado cumplido con las politicas de la contraseña:';
if(!letter) message += '\nFalto una letra mayuscula o minuscula.';
if(!number) message += '\nFalto un numero';
if(!especial) message += '\nFalto un caracter especial';
if(!sizeRegularExpresion) message += '\nLa contraseña minimo debe ser de 8 caracteres';

alert(message);

} catch (error) {
console.log(error);    
}