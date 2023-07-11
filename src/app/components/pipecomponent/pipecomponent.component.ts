import { Component } from '@angular/core';

@Component({
  selector: 'app-pipecomponent',
  templateUrl: './pipecomponent.component.html',
  styleUrls: ['./pipecomponent.component.css']
})
export class PipecomponentComponent {

  todayDate = new Date();

  name="Divya Mayekar";

  fname= "Ajay"

  price = 4.5225;

  marks=.60;
  p:number=0;
  getPercent()
  {
    this.p=(45+56+20)/300;
    return this.p;
  }

  amount = 456000;
  
  c=50;

}
