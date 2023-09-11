//? Un juego: (tomado de Bernardo Calderon, "Introducción a la simulación", 1975?)
// TODO: Usted lanza una moneda y cuenta el número de caras y sellos que se va obteniendo. El juego termina cuando la diferencia entre caras y sellos sea 3, no interesa cual sea mayor. En este instante usted recibe $8 por el juego, pero tiene que pagar $1 por cada lanzamiento que usted haya hecho. ¿Le conviene a Usted participar en el juego?.

import { juegoDeLaMoneda } from "./clases/moneda";

//! Considere también la situación, donde el juego es adicionalmente limitado a un máximo de 15 lanzamientos.

const juego = new juegoDeLaMoneda();

//? Jugar sin límite:
// console.log(`Tu dinero: $${juego.jugar()}`);

//? Jugar con límite:
// console.log(`Tu dinero: $${juego.jugarConLimite()}`);

//? Jugar varias veces sin límite:
// console.log(`Tu dinero: $${juego.multiplesJuegos(100)}`);

//? Jugar varias veces con límite:
console.log(`Tu dinero: $${juego.multiplesJuegosConLimite(100)}`);

// TODO: No conviene jugar en límite infinito, porque tiene una tendencia a salir más de 8 lanzamientos y perder todo el dinero; además, también quedará en deuda.
// TODO: Por el contrario, jugar con un límite de 15, no asegura ganar del todo, pero es más beneficioso que jugar sin límite.
