import { Component, OnInit } from '@angular/core';
import {IngradientService} from "../../services/ingradient.service";
import {Ingradient} from "../../models/ingradient";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ingradient',
  templateUrl: './ingradient.component.html',
  styleUrls: ['./ingradient.component.sass']
})
export class IngradientComponent implements OnInit {
  ingradients: Ingradient[];

  constructor(private route: ActivatedRoute, private ingradienrService: IngradientService, private router: Router) { }

  ngOnInit() {
    this.getIngradient('ingradientsDb.json');
    window.scrollTo(0, 0);
  }

  getIngradient(fileUrl: string) {
    this.ingradienrService.getIngradients(fileUrl).subscribe(res => this.ingradients = res.json().ingradients);
  }
  onSelect (item: any) {
    this.router.navigate(['ingradient/currentingradient']);
    this.ingradienrService.selectedIngradient = item;
  }


}
