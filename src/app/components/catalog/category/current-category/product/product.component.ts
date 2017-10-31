import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../../../../services/products.service";
import {OrderService} from "../../../../../services/order.service";
import {OrderedProduct} from "../../../../../models/orderedProduct";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  product: any;
  price: any;
  orderedProduct: OrderedProduct;
  currentNumOfSize: any;
  visibility: any = false;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private orderService: OrderService) { }

  ngOnInit() {
    this.product = this.productService.selectedProduct;
    this.price = this.product.price[0];
    this.currentNumOfSize = 0;
    window.scrollTo(0, 0);
  }
  OpenIngrad() {
    this.product = this.productService.selectedProduct;
    this.router.navigate(['catalog/product/mainingradients']);
  }
  OpenComposition() {
    this.product = this.productService.selectedProduct;
    this.router.navigate(['catalog/product/composition']);
  }
  OpenAdvice() {
    this.product = this.productService.selectedProduct;
    console.log(this.product);
    this.router.navigate(['catalog/product/advice']);
  }


  choosePrice(item) {
    this.price = this.product.price[item];
    this.currentNumOfSize = item;
  }
  addProductToOrder(item) {
    this.orderedProduct = {
      id: item.id,
      name: item.name,
      picture: item.picture,
      price: item.price[this.currentNumOfSize],
      size: item.size[this.currentNumOfSize],
      count: 1
    }
    this.orderService.addProduct(this.orderedProduct);

    this.getStyle();
  }

  getStyle() {
    this.visibility = true;
    setTimeout(() => {
      this.visibility = false;
    } , 1800);
  }
}
