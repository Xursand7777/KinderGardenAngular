import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {stepper} from "../../core/route-animated";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  animations: [ stepper ]
})
export class MainLayoutComponent implements OnInit {

  constructor() { }
  prepareRoute(outlet: RouterOutlet ){
    return outlet && outlet.activatedRouteData;
  }
  ngOnInit(): void {
  }

}
