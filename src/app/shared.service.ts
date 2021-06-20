import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:58341//api";
  readonly PhotoUrl = "http://localhost:58341//Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/City');
  }

  addCity(val:any){
    return this.http.post(this.APIUrl+'/City',val);
  }

  updateCity(val:any){
    return this.http.put(this.APIUrl+'/City',val);
  }

  deleteCity(val:any){
    return this.http.delete(this.APIUrl+'/City/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Restaurant');
  }

  addRestaurant(val:any){
    return this.http.post(this.APIUrl+'/Restaurant',val);
  }

  updateRestaurant(val:any){
    return this.http.put(this.APIUrl+'/Restaurant',val);
  }

  deleteRestaurant(val:any){
    return this.http.delete(this.APIUrl+'/Restaurant/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Restaurant/SaveFile',val);
  }

  getAllCityNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Restaurant/GetAllCityNames');
  }
}
