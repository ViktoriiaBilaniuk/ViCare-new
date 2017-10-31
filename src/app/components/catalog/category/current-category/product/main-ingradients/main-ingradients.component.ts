import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../../../../../services/products.service";
import {IngradientService} from "../../../../../../services/ingradient.service";
import {Product} from "../../../../../../models/product";
import {Ingradient} from "../../../../../../models/ingradient";

@Component({
  selector: 'app-main-ingradients',
  templateUrl: './main-ingradients.component.html',
  styleUrls: ['./main-ingradients.component.sass']
})
export class MainIngradientsComponent implements OnInit {
  product: any;
  selectedIngradients: Ingradient[] = [];
  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private router: Router,
              private ingradientService: IngradientService) { }

  ngOnInit() {
    this.product = this.productService.selectedProduct;
    this.ingradientService.gettAllIngradientsFronDb(this.product);
    this.selectedIngradients = this.ingradientService.selectedIngradients;
  }
  getIngradientsForCurrentProduct(product: Product) {
    this.selectedIngradients = this.ingradientService.selectedIngradients;
  }

  openCurrentIngradient(item) {
    this.router.navigate(['ingradient/currentingradient']);
    this.ingradientService.selectedIngradient = item;
  }


}
