import { Component, OnInit } from '@angular/core';
import { FoodDetails } from 'src/app/models/food-details';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodData:FoodDetails[] =  []

constructor(private service:OrderdetailsService){}


  ngOnInit(): void {    
    this.foodData = this.service.foodDetails;
  }



}
