import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {Tour} from "../../../models/Tour";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  tours: Tour[] = []
  id: any;
  tour:any;

  constructor(private tourservice: TourService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.tourservice.getall().subscribe((data) => {
      this.tours = data
    })
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourservice.findById(this.id).subscribe((data)=>{
        this.tour = data
        console.log(data)
      })
    })
  }

  delete() {
    if (confirm("muốn xoá không")) {
      this.tourservice.deleteProduct(this.id).subscribe()
      this.ngOnInit()
    }
  }
}
