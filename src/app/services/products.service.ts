import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Product} from "../models/product";

@Injectable()
export class ProductsService {
  selectedProduct: Product;
  constructor(private http: Http) { }
  getProducts(fileUrl: string) {
    return this.http.get(`http://localhost:4200/assets/db/${fileUrl}`);
  }
  //bgfnhmj
  setProduct(product: Product) {
    this.selectedProduct = product;
  }
  //lkjkgghdgusrhlsk;
}
//
