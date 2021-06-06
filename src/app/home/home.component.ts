import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
firstsubscription!:Subscription;
  constructor() {
  }

  ngOnInit() {
const customObservable  = new Observable(observer=>{
let count = 0;
setInterval(()=>{
  observer.next(count);
  count++;
},1000)
});
 this.firstsubscription =customObservable.subscribe(data=>{
  console.log(data);
});
  }
  ngOnDestroy() {
    this.firstsubscription.unsubscribe()
  }
}
