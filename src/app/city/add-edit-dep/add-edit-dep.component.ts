import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  CityId:string;
  CityName:string;

  ngOnInit(): void {
    this.CityId=this.dep.CityId;
    this.CityName=this.dep.CityName;
  }

  addCity(){
    var val = {CityId:this.CityId,
                CityName:this.CityName};
    this.service.addCity(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCity(){
    var val = {CityId:this.CityId,
      CityName:this.CityName};
    this.service.updateCity(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}