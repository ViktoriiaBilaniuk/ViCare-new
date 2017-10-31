import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IngradientService} from "../../../services/ingradient.service";

@Component({
  selector: 'app-current-ingradient',
  templateUrl: './current-ingradient.component.html',
  styleUrls: ['./current-ingradient.component.sass']
})
export class CurrentIngradientComponent implements OnInit {

  selected_ingradient: any;
  constructor(private router: Router, private ingradientService: IngradientService) { }

  ngOnInit() {
    this.selected_ingradient = this.ingradientService.selectedIngradient;
  }
  close() {
    this.router.navigate(['ingradient']);
  }
}
