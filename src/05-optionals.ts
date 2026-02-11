export const createProduct = (id: String | number,
  isNew?: boolean,
  stock?: number //aqui se indica que el parametro es opcional, con el operador de interrogacion.
) => {
  return {
    id,
    isNew: isNew || true, // si isNew no se proporciona, se asigna el valor por defecto true
    stock: stock || 10 // si stock no se proporciona, se asigna el valor por defecto 10
  }
}

const product1 = createProduct(1, true, 100);
console.log(product1);
const product2 = createProduct(2, false);
console.log(product2);
const product3 = createProduct(3, false, 0); // aqui se genera error porque el operador || asigna el valor por defecto 10, aunque se haya proporcionado el valor 0
console.log(product3);



export const createProduct2 = (id: String | number,
  isNew?: boolean,
  stock?: number //aqui se indica que el parametro es opcional, con el operador de interrogacion.
) => {
  return {
    id,
    isNew: isNew ?? true, // si isNew no se proporciona, se asigna el valor por defecto true
    stock: stock ?? 1 // si stock no se proporciona, se asigna el valor por defecto 10
  }
}

const product11 = createProduct2(1, true, 100);
console.log(product11);
const product21 = createProduct2(2, false);
console.log(product21);
const product31 = createProduct2(3, false, 0); // ya no hay error porque se usa el operador ?? que asigna valor solo cuando es null o undefined
console.log(product31);
