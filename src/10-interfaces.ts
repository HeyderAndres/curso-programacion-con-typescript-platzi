type Sizes = 'S' | 'M' | 'L' | 'XL';
// type Product = {
//   id: string | number,
//   title: string,
//   createdAt: Date,
//   stock: number,
//   size: Sizes
// }

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
};


const products: Product[] = [];

products.push({
  id: '1',
  title: 'Producto 1',
  createdAt: new Date(),
  stock: 10,
  size: 'M'
});

const addProduct = (data: Product) => {
  products.push(data);
}
