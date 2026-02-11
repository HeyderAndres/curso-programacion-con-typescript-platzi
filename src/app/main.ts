import { addProduct, getProducts, products, updateProduct } from './products/products.service';
import { Sizes } from './products/product.model';
import { faker } from '@faker-js/faker';

for (let i = 0; i < 5; i++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 0, max: 100 }),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement<Sizes>(['S', 'M', 'L', 'XL']),
    price: parseFloat(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.word.words({count: { min:1, max: 3}}).split(' '),
    categoryId: faker.string.uuid(),
  });
}

console.log(products);
const product = products[0];
console.log(`prev data product => ${JSON.stringify(product)}`);

const updatedProduct = updateProduct(product.id, {
  title: 'New Title',
  stock: 50,
});

console.log(`pos data product => ${JSON.stringify(updatedProduct)}`);

const productsFiltered = getProducts({ title: 'New Title'});
console.log(productsFiltered);

