import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  subscription! : Subscription;
  constructor(private userService:UserService) {}
activated : boolean = false;
  ngOnInit() {
    this.subscription = this.userService.activatedEmitter.subscribe(activate=>{
      this.activated = activate;
    })

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

