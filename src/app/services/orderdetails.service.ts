import { Injectable } from '@angular/core';
import { FoodDetails } from '../models/food-details';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }

  foodDetails:FoodDetails[] = [
    {
      _id:1,
      foodName:'Jowar Kadak Rotti',
      foodDetails:'Prepared with pure Jowar flour',
      foodPrice:100,
      foodImage:'../../../assets/images/Jowar kadak rotti.jpg'
    },
    {
      _id:2,
      foodName:'Holgi',
      foodDetails:'Prepared with pure oil and Ghee',
      foodPrice:150,
      foodImage:'../../../assets/images/Holgi with butter.jpg'
    },
    {
      _id:3,
      foodName:'Junkaa',
      foodDetails:'Prepared with pure Jowar flour and pure oil',
      foodPrice:100,
      foodImage:'../../../assets/images/Junkaa special.jpg'
    },
    {
      _id:4,
      foodName:'Girmit with Mirchi',
      foodDetails:'Girmit with Mirchi which is special about North karnataka',
      foodPrice:100,
      foodImage:'../../../assets/images/Girmit with Mirchi.jpg'
    },
    {
      _id:5,
      foodName:'Raagi and Jowar rotti thaali',
      foodDetails:'Delicious North karnataka full meals',
      foodPrice:150,
      foodImage:'../../../assets/images/Raagi and Jowar rotti thaali.jpg'
    },
    {
      _id:6,
      foodName:'Rotti thaali with Brinjaal/Badanekaayi Sabji',
      foodDetails:'Prepared with pure Jowar flour',
      foodPrice:170,
      foodImage:'../../../assets/images/Rotti thaali with Brinjaal Sabji.jpg'
    },
    {
      _id:7,
      foodName:'Madli / Maddli',
      foodDetails:'Delicious Sweet recipe with pure ingredients',
      foodPrice:100,
      foodImage:'../../../assets/images/madli.jpg'
    }
  ]
}
