import axios from "axios";
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/Product.dto";

export class BaseHttpService<T> {
  // data: T[] = [];
  constructor(private url: string) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async ()=> {
const productService = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products');
productService.getAll().then(data => console.log(data));

const rta = await productService.update<Product['id'], UpdateProductDto>(1, {
  title: 'nuevo title'
})

})();

