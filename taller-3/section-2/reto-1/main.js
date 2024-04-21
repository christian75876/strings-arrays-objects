try {

let schoolGrades = prompt(`Ingrese las calificacíones obtenidas
                            el formato de ingreso sera: 
                            ********* 1,5,6,3 ********
                            no debe tener espacios en blanco y solo ingresar numeros.`);
const qualifications = schoolGrades.split(",");
const note = qualifications.map(qualification => parseFloat(qualification));
let initialValue = 0;
const total = note.reduce((acumulator,sumatoria) =>
sumatoria + acumulator, initialValue
);
let average = total / note.length;

console.log(`El promedio de las calificaciones es: ${average}`);

/* Eliminar los espacios en blanco y dividir las calificaciones por coma
const gradesArray = schoolGrades.replace(/\s/g, '').split(',');*/
} catch (error) {
    console.error(Error);
}