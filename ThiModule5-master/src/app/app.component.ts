import { Component } from '@angular/core';
import {TourService} from "./service/tour.service";
import {Tour} from "../models/Tour";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thimd5';

  constructor(private tourservice:TourService) { }

  ngOnInit(): void {
  }

}
