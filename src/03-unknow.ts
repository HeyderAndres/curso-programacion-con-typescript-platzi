//any
let anyvar: any;

// el tipo unknown es un tipo de dato que representa cualquier valor, pero a diferencia de any, no permite realizar operaciones sobre el valor sin antes verificar su tipo.
let unknowVar: unknown;

// para poder realizar operaciones sobre una variable de tipo unknown, primero debemos varificar el tipo de la variable usando una condicional, como por ejemplo un if.
if (typeof unknowVar === 'string') {
  unknowVar.toLocaleLowerCase();
}
