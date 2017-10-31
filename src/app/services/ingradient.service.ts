import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Product} from "../models/product";
import {Ingradient} from "../models/ingradient";

@Injectable()
export class IngradientService {
  ingradients: any;
  selectedIngradients: Ingradient[] = [];
  selectedIngradient: Ingradient;
  fileUrl = 'ingradientsDb.json';
  constructor(private http: Http) { }
  gettAllIngradientsFronDb(product: Product) {
    this.selectedIngradients.length = 0;
    this.getIngradients(this.fileUrl).subscribe(data => {
      this.ingradients = data.json().ingradients;
      for (let ingradientID of  product.ingradients) {
        for (let ingradient of  this.ingradients) {
          if (ingradient.id === ingradientID) {
            this.selectedIngradients.push(ingradient);
          }
        }
      }
    });
  }
  getIngradients(fileUrl: string) {
    return this.http.get(`http://localhost:4200/assets/db/${fileUrl}`);
  }
  setIngradient(ingradient: Ingradient) {
    this.selectedIngradient = ingradient;
  }
}
