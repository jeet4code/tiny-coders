import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-diet',
  templateUrl: './food-diet.component.html',
  styleUrls: ['./food-diet.component.scss']
})
export class FoodDietComponent implements OnInit {
  showLabel= false;
  items= [{
    product_name: 'Sprouts',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/sprouts.jpg',
    product_benefits: 'Vitamin C present in sprouts promotes a clear skinthrough the production of collagen.',
  },{
    product_name: 'Sprouts',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/sprouts.jpg',
    product_benefits: 'Vitamin C present in sprouts promotes a clear skinthrough the production of collagen.',
  },{
    product_name: 'Sprouts',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/sprouts.jpg',
    product_benefits: 'Vitamin C present in sprouts promotes a clear skinthrough the production of collagen.',
  },{
    product_name: 'Sprouts',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/sprouts.jpg',
    product_benefits: 'Vitamin C present in sprouts promotes a clear skinthrough the production of collagen.',
  },{
    product_name: 'Sprouts',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/sprouts.jpg',
    product_benefits: 'Vitamin C present in sprouts promotes a clear skinthrough the production of collagen.',
  },{
    product_name: 'Sprouts',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/sprouts.jpg',
    product_benefits: 'Vitamin C present in sprouts promotes a clear skinthrough the production of collagen.',
  },{
    product_name: 'Sprouts',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/sprouts.jpg',
    product_benefits: 'Vitamin C present in sprouts promotes a clear skinthrough the production of collagen.',
  },{
    product_name: 'Sprouts',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/sprouts.jpg',
    product_benefits: 'Vitamin C present in sprouts promotes a clear skinthrough the production of collagen.',
  },{
    product_name: 'Sprouts',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/sprouts.jpg',
    product_benefits: 'Vitamin C present in sprouts promotes a clear skinthrough the production of collagen.',
  },
  {
    product_name: 'Sprouts',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/sprouts.jpg',
    product_benefits: 'Vitamin C present in sprouts promotes a clear skinthrough the production of collagen.',
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
