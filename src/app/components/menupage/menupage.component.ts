import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodDetails } from 'src/app/models/food-details';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  menuId: number | undefined
  menuData: FoodDetails[] = []

  constructor(private route: ActivatedRoute, private service: OrderdetailsService) { }

  ngOnInit(): void {
    if (this.route.url) {
      console.log(this.route.url)
      // this.menuId = Number(this.route.snapshot.paramMap.get('id'));
      this.menuId = Number(this.route.snapshot.paramMap.get('id'));
      console.log('The selected item is ', this.menuId)
      if (this.menuId) {
        this.menuData = this.service.foodDetails.filter((foodItem) =>
          foodItem._id == this.menuId)
      }
    }
  }

}
