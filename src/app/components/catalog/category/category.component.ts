import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  categories: object[];
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.categories = this.categoryService.categories;
    window.scrollTo(0, 0);
  }
  onSelect(url: string) {
    this.router.navigate(['catalog/categories/', url]);
  }
}
