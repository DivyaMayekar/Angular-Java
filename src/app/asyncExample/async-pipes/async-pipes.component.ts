import { Component } from '@angular/core';
import { Observable, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-async-pipes',
  templateUrl: './async-pipes.component.html',
  styleUrls: ['./async-pipes.component.css']
})
export class AsyncPipesComponent {

  asyncPipe = new Observable((observe)=>{
    setTimeout(() => { observe.next("Hello");
  },1000);

  })

}
