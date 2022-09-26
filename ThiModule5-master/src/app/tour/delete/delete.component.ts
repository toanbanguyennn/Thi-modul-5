import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TourService} from "../../service/tour.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit,OnChanges {
  id:any;
  tour:any;
  constructor(private route: ActivatedRoute,private tourService:TourService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data)=>{
        this.tour = data
        console.log(data)
      })
    })

  }
  delete(){
    if (confirm("muốn xoá không")){
      this.tourService.deleteProduct(this.id).subscribe()

  this.ngOnInit()
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tourService.findById(this.id).subscribe((data)=>{
        this.tour = data
      })
    })
  }
}
