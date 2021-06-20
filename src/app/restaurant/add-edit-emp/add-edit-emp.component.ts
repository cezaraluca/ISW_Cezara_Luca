import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css'],
})
export class AddEditEmpComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() emp: any;
  RestaurantId: string;
  RestaurantName: string;
  City: string;
  DateOfJoining: string;
  PhotoFileName: string;
  WiFi: string;
  CardPayment: string;
  PetFriendly: string;
  Music: string;
  Events: string;
  Delivery: string;
  Terrace: string;
  Booking: string;
  PhotoFilePath: string;

  CityList: any = [];

  ngOnInit(): void {
    this.loadCityList();
  }

  loadCityList() {
    this.service.getAllCityNames().subscribe((data: any) => {
      this.CityList = data;

      this.RestaurantId = this.emp.RestaurantId;
      this.RestaurantName = this.emp.RestaurantName;
      this.City = this.emp.City;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.WiFi = this.emp.WiFi;
      this.CardPayment = this.emp.CardPayment;
      this.PetFriendly = this.emp.PetFriendly;
      this.Music = this.emp.Music;
      this.Events = this.emp.Events;
      this.Delivery = this.emp.Delivery;
      this.Terrace = this.emp.Terrace;
      this.Booking = this.emp.Booking;
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
  }

  addRestaurant() {
    var val = {
      RestaurantId: this.RestaurantId,
      RestaurantName: this.RestaurantName,
      City: this.City,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
      WiFi: this.WiFi,
      CardPayment: this.CardPayment,
      PetFriendly: this.PetFriendly,
      Music: this.Music,
      Events: this.Events,
      Delivery: this.Delivery,
      Terrace: this.Terrace,
      Booking: this.Booking,
    };

    this.service.addRestaurant(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateRestaurant() {
    var val = {
      RestaurantId: this.RestaurantId,
      RestaurantName: this.RestaurantName,
      City: this.City,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
      WiFi: this.WiFi,
      CardPayment: this.CardPayment,
      PetFriendly: this.PetFriendly,
      Music: this.Music,
      Events: this.Events,
      Delivery: this.Delivery,
      Terrace: this.Terrace,
      Booking: this.Booking
    };

    this.service.updateRestaurant(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  uploadPhoto(event) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
  }
}
