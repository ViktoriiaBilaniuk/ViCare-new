import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../../models/category';
import {Product} from '../../../../models/product';
import {ProductsService} from '../../../../services/products.service';
import {Router} from '@angular/router';
import {OrderService} from '../../../../services/order.service';
import {OrderedProduct} from '../../../../models/orderedProduct';

@Component({
  selector: 'app-current-category',
  templateUrl: './current-category.component.html',
  styleUrls: ['./current-category.component.sass']
})
export class CurrentCategoryComponent implements OnInit {
  sub: any;
  category: Category;ng
  products: Product[] = [];
  orderedProduct: OrderedProduct;
  visibility: any = false;

  constructor(private route: ActivatedRoute,
              private categoryService: CategoryService,
              private productsService: ProductsService,
              private router: Router,
              private orderService: OrderService) { }

  ngOnInit() {
    this.sub = this.route.params
      .subscribe((params) => {
        const categoryName = params['category'];
        this.category = this.categoryService.getCategoryByName(categoryName);
        this.getProduct(this.category.file);
      });
    window.scrollTo(0, 0);
  }

  getProduct(fileUrl: string) {
      this.productsService.getProducts(fileUrl).subscribe(res => this.products = res.json().products);
  }

  setProduct(product: Product) {
    this.productsService.setProduct(product);
    this.router.navigate(['catalog/product']);
  }

  addProductToOrder(item) {
    this.orderedProduct = new OrderedProduct();
    this.orderedProduct.id = item.id;
    this.orderedProduct.name = item.name;
    this.orderedProduct.picture = item.picture;
    this.orderedProduct.price = item.price[0];
    this.orderedProduct.size = item.size[0];

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

