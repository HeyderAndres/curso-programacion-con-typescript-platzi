import { faker } from "@faker-js/faker";
import { CreateProductDTO, FindProductDTO, UpdateProductDTO } from "./product.dto";
import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDTO): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};


export const updateProduct = (id: string, changes: UpdateProductDTO): Product => {
  const index = products.findIndex(item => item.id === id);
  const preData = products[index];
  products[index] = {
    ...preData,
    ...changes,
    updatedAt: faker.date.recent(),
  }

  return products[index];
}

// export const deleteProduct = (id: string): Product => {

// }

// export const getProduct = (id: string) => {

// }

export const getProducts = (dto: FindProductDTO): Product[] => {
  const filterKeys = Object.keys(dto);
  if (filterKeys.length === 0) return products;

  return products.filter(item => {
    const isMatch = filterKeys.every(key => {
      return item[key as keyof Product] === dto[key as keyof FindProductDTO];
    })
    return isMatch;
  });


}
