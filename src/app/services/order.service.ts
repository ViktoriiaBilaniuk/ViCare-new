
import {Injectable} from "@angular/core";
import {Product} from "../models/product";
import {OrderedProduct} from "../models/orderedProduct";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class OrderService {
  order: {
    products: OrderedProduct[],
    finalPrice: number
  };
  constructor() {}

  addProduct(product: OrderedProduct) {
    this.order.products.push(product);
  }
  public getOrder() {
    if (!this.order) {
      this.order = { products : [], finalPrice: 0};
    }
    return this.order;
  }
  removeProduct(id: any) {
    this.order.products.splice(id, 1);
  }

  calcFinalPrice() {
    this.order.finalPrice = 0;
    for (let i = 0; i < this.order.products.length; i++) {
      this.order.finalPrice += this.order.products[i].price * this.order.products[i].count;
    }
  }

  /*calcFinalPrice() {
    this.order.finalPrice = 0;
    forEach(this.order.products) => {this.order.finalPrice += this.order.products.price * this.order.products.count;}
    for (let i = 0; i < this.order.products.length; i++) {
      this.order.finalPrice += this.order.products[i].price * this.order.products[i].count;
    }
  }*/

  getCount(count) {
    count = this.order.products.length;
  }
  getPrice(item) {
    return item.price * item.count;
  }
}
