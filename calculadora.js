// Paso 1: Declaración de Variables
let a = 10;
let b = 5;

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2; // Realiza la suma
    } else if (operacion === "resta") {
        return num1 - num2; // Realiza la resta
    } else if (operacion === "multiplicacion") {
        return num1 * num2; // Realiza la multiplicación
    } else if (operacion === "division") {
        if (num2 !== 0) {
            return num1 / num2; // Realiza la división, evitando división por cero
        } else {
            return "Error: División por cero no permitida";
        }
    } else {
        return "Operación no válida"; // Si la operación no es reconocida
    }
}

// Paso 4: Bucle para realizar múltiples operaciones
let continuar = true;

while (continuar) {
    // Simulando la entrada del usuario con valores fijos para esta demostración
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    // Realizar la operación
    if (operacion === "salir") {
        continuar = false; // Salir del bucle si el usuario ingresa "salir"
    } else {
        let resultado = realizarOperacion(num1, num2, operacion);
        console.log(`Resultado: ${resultado}`);

        // Preguntar si el usuario desea hacer otra operación
        let hacerOtraOperacion = prompt("¿Deseas realizar otra operación? (si/no)");
        if (hacerOtraOperacion.toLowerCase() !== "si") {
            continuar = false; // Salir del bucle si el usuario no desea continuar
        }
    }
}

console.log("¡Hasta luego!");
