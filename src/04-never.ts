// never es un tipo de dato que representa un valor que nunca ocurre, es decir que no puede ser asignado a ninguna variable, ni ser retornado por ninguna función.
// el tipo never se utiliza principalmente para indicar que una función no retorna ningun valor, ya sea porque lanza una excepcion o porque entra en un bucle infinito.

function throwError(message: string) {
  throw new Error(message);
};

throwError('Error');
