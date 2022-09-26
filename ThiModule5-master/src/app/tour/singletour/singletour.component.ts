import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-singletour',
  templateUrl: './singletour.component.html',
  styleUrls: ['./singletour.component.css']
})
export class SingletourComponent implements OnInit {
  id:any;
  tour:any;
  constructor(private route: ActivatedRoute,private tourService:TourService,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data)=>{
        this.tour = data

      })
    })

  }
}

