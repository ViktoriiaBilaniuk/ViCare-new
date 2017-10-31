import {Component, EventEmitter, ModuleWithProviders, OnInit, Output} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {Location} from "@angular/common";
import {OrderService} from "../../services/order.service";
import {OrderedProduct} from "../../models/orderedProduct";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {
  order: any
  visibleSubmit = false;
  @Output() close = new EventEmitter();

  constructor(private router: Router, private location: Location, private orderService: OrderService) { }

  ngOnInit() {
    this.order  = this.orderService.getOrder();
    this.calc();
    window.scrollTo(0, 0);
  }
  calc() {
    this.orderService.calcFinalPrice();
  }
  closeWindow() {
    this.close.emit();
  }
  removeProductFromOrder(id) {
    this.orderService.removeProduct(id);
  }

  plus(item) {
    item.count++;
    this.calc();
  }
  minus(item) {
    item.count--;
    this.calc();
  }
  getCount(number) {
    number = this.order.products.length;
  }
  toOrder() {
    this.visibleSubmit = !this.visibleSubmit;
  }

}
