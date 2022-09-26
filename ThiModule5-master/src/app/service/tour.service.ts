import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../../models/Tour";

@Injectable({
  providedIn: 'root'
})
export class TourService {
// tours:Tour[]=[];
  constructor(private http:HttpClient) { }
  getall(): Observable<Tour[]>{
    return this.http.get<Tour[]>("http://localhost:3000/tuors");
  }
  saveProduct(tour: any): Observable<Tour> {
    return this.http.post<Tour>("http://localhost:3000/tuors" , tour);
  }
  editTour(id: number, tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`http://localhost:3000/tuors/${id}`, tour);
  }
  findById(id: number): Observable<Tour> {
    console.log(this.http.get<Tour>(`http://localhost:3000/tuors/${id}`))
    return this.http.get<Tour>(`http://localhost:3000/tuors/${id}`);
  }
  deleteProduct(id: number): Observable<Tour> {
    return this.http.delete<Tour>(`http://localhost:3000/tuors/${id}`);
  }
}
