import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.sass']
})
export class CallbackComponent implements OnInit {

  name = '';
  email: string;
  message: string;
  constructor() { }

  ngOnInit() {
  }
  saveData(form: any) {
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
  }

  clickBtn(e){
    console.log(e);
  }

}
