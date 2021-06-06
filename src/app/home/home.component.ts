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
  if (count === 4){
    observer.complete();
  }
  if (count > 3){
    observer.error(new Error("Less than three idiot less than three!"))
  }
  count++;
},1000)
});
 this.firstsubscription =customObservable.subscribe(data=>{
  console.log(data);
},error => { console.log(error); alert(error.message);},()=>{console.log('Completed at 4 before the error')});
  }
  ngOnDestroy() {
    this.firstsubscription.unsubscribe()
  }
}
