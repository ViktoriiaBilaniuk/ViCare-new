import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../../../../services/products.service";

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.sass']
})
export class CompositionComponent implements OnInit {
  product: any;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.product = this.productService.selectedProduct;
  }

}
