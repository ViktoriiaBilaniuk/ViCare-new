import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrderService} from "../../../services/order.service";
import {OrderedProduct} from "../../../models/orderedProduct";
import {Location} from "@angular/common";

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.sass']
})
export class SubmitComponent implements OnInit {

  name = '';
  email: string;
  tel: string;
  address: string;
  price: any;
  order: object;
  visibility = false;
  openList = false;
  deliveryMethod = 'Оберість спосіб доставки';
  labelForDropdown = '';
  list  = [
    {
      id: '0',
      name: 'Нова пошта по Україні(згідно тарифів пошти)',
    },
    {
      id: '1',
      name: 'Самовивіз'
    }
  ]
  @Output() close = new EventEmitter();

  constructor(private orderService: OrderService, private location: Location) { }

  ngOnInit() {
    this.order = this.orderService.order;
    window.scrollTo(0, 0);
  }

  getPrice(item) {
    this.price = this.orderService.getPrice(item);
  }

  closeWindow() {
    this.close.emit();
  }

  openOrder() {
    this.visibility = !this.visibility;
  }

  openDropdown() {
    this.openList = !this.openList;
  }
  chooseDeliveryMethod(item) {
    this.deliveryMethod = item.name;
    this.openDropdown();
    this.labelForDropdown = 'Cпосіб доставки';
  }
}
