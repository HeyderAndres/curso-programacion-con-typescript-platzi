export const createProduct2 = (
  id: String | number,
  isNew: boolean = true, //aqui se asigna un valor por defecto en caso que no se proporcione un valor.
  stock: number = 7,
) => {
  return {
    id,
    isNew,
    stock,
  };
};

const product11 = createProduct2(1, true, 100);
console.log(product11);
const product21 = createProduct2(2, false);
console.log(product21);
const product31 = createProduct2(3, false, 0);
console.log(product31);
