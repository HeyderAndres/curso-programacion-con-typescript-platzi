// un enum es un tipo de dato que nos permite definir un conjunto de valores constantes, cada uno con un nombre unico.
// En TypeScript los enums pueden ser de tipo número o de tipo cadena.
export enum ROLES {
  ADMIN = "ADMIN",
  SELLER = "SELLER",
  CUSTOMER = "CUSTOMER"
}

// Podemos usar el enum para definir el tipo de una propiedad en un objeto, o para definir el tipo de un parámetro en una función
export type User = {
  userName: string,
  role: ROLES
}

// Ahora podemos crear un usuario y asignarle un role usando el enum ROLES.
const usuario1: User = {
  userName: 'Heider',
  role: ROLES.ADMIN
}

console.log(usuario1);
