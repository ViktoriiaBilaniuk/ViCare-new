import { Injectable } from '@angular/core';
import {Category} from "../models/category";

@Injectable()
export class CategoryService {
  categories = [
    {
      name: 'Для волосся',
      url: 'hair',
      file: 'hairDb.json',
      image: '../../../../assets/images/hair.jpg'
    },
    {
      name: 'Для тіла',
      url: 'body',
      file: 'bodyDb.json',
      image: '../../../../assets/images/body.jpg'
    },
    {
      name: 'Для обличчя',
      url: 'face',
      file: 'faceDb.json',
      image: '../../../../assets/images/2.jpg'
    }
  ]
  constructor() { }
  getCategoryByName(name: string): Category {
    for (let item of this.categories){
      if (item.url === name) {
        return item;
      }
    }
  }
}
