let name = "Prueba para nombre";

// name = 123 No se puede por: Error con tipado
name = "123";

const name_const: string = "Constante"; //Constante
const isAlive: boolean = true;
let hpPoints: number | "FULL"; // Se puede declarar varios tipos con |

hpPoints = 123;
// hpPoints = "123"; Error no se puede con cualquier string
hpPoints = "FULL";

console.log({ name: name_const, isAlive: isAlive, hpPoints: hpPoints });

export {};
