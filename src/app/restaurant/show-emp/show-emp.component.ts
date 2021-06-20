import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


interface IRetaurantFIlter { CityName?: string, petFriendly: boolean };
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(
    private service:SharedService,
    public activatedRoute: ActivatedRoute
  ) { }

  RestaurantList:any=[];
  _RestaurantList:any = [];

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  CityNameFilter:string="";
  appliedFilters: IRetaurantFIlter;

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params);
    this.appliedFilters = { petFriendly: undefined, CityName: this?.activatedRoute?.snapshot?.params?.CityName || '' };
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      RestaurantId:0,
      RestaurantName:"",
      City:"",
      DateOfJoining:"",
      PhotoFileName:""
    }
    this.ModalTitle="Add Restaurant";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item){
    console.log(item);
    this.emp=item;
    this.ModalTitle="Edit Restaurant";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteRestaurant(item.RestaurantId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this._RestaurantList = data;
      this.RestaurantList=this.applyFilters(data);
    });
  }

  applyFilters(data) {
    console.log(this.appliedFilters, data);
    if(this.appliedFilters) {
      if(this.appliedFilters?.CityName) {
        data = data?.filter(restaurant => {
          return restaurant?.City && restaurant.City.includes(this.appliedFilters?.CityName)
        });
      }

      if (typeof this.appliedFilters.petFriendly !== 'undefined' && this.appliedFilters.petFriendly === true) {
        data = data?.filter(restaurant => {
          return (this.appliedFilters.petFriendly === true && restaurant.PetFriendly === 'Yes')
        });
      }
    }
    return data;
  }
}