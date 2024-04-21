try {
  let email = prompt('Ingrese su correo electrónico:');

  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (validation.test(email) && !email.includes('@.') && !email.includes('.@')) {
      console.log('Correo electrónico válido');
  } else {
      console.log('Correo electrónico inválido');
  }
  
} catch (error) {
  console.error(error);  
}