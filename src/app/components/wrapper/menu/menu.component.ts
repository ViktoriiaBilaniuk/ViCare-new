import {Component, HostListener, OnInit, SimpleChanges} from '@angular/core';
import {OrderService} from "../../../services/order.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  count: any = 0;
  visibility = false;
  label: string;
  constructor(public orderService: OrderService) { }
  innerWidth;
  close = false;
  openMobileMenu = false;
  menu_mobile_btn = document.getElementsByClassName('mobile-btn');
    ngOnInit() {
    this.orderService.getOrder();
    this.innerWidth = window.innerWidth;
  }

  openOrder() {
    this.visibility = !this.visibility;
      this.orderService.calcFinalPrice();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 992) {
      this.close = true;
    } else {
      this.close = false;
    }
  }
  open() {
    this.openMobileMenu = ! this.openMobileMenu;
  }
}
