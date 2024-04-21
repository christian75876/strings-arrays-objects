try {

let schoolGrades = prompt(`Ingrese las calificacíones obtenidas
                            el formato de ingreso sera: 
                            ********* 1,5,6,3 ********
                            no debe tener espacios en blanco y solo ingresar numeros.`);
const qualifications = schoolGrades.split(",");
const notes = qualifications.map(qualification => parseFloat(qualification));
let initialValue = 0;
const total = notes.reduce((acumulator,sumatoria) =>
sumatoria + acumulator, initialValue
);
let average = total / notes.length;

let max = -Infinity
let min = Infinity
let countApproved = 0;
let conutRejected = 0;
//encontrar la nota maxima y minima
notes.forEach(note => {
max = note > max? note : max;
min = note < min? note : min;
note > 70? countApproved++ : conutRejected++
})

//Ordenar lista d emenor a mayot
notes.sort((a,b) => a - b);

console.log(`El promedio de las calificaciones es: ${average}
            La nota maxima de los estudiantes fue: ${max}
            La nota minima de los estudiantes fue: ${min}
            La cantidad de notas Aprobadas fue de ${countApproved}
            La cantidad de notas Reprobadas fue de ${conutRejected}
            La lista ordenada de las notas de menor a mayor seria ${notes.sort((a,b) => a - b)}`);

/* Eliminar los espacios en blanco y dividir las calificaciones por coma
const gradesArray = schoolGrades.replace(/\s/g, '').split(',');*/
} catch (error) {
    console.error(Error);
}