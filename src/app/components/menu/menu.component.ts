import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
import {FoodDetails} from 'src/app/models/food-details'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foodData:FoodDetails[] =  []

  constructor(private service:OrderdetailsService){}

  ngOnInit(): void {
      this.foodData = this.service.foodDetails;
  }

}
