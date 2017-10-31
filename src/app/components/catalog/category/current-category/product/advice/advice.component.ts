import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../../../../services/products.service";

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.sass']
})
export class AdviceComponent implements OnInit {
  product: any;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.product = this.productService.selectedProduct;
  }

}
