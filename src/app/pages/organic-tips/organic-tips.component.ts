import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organic-tips',
  templateUrl: './organic-tips.component.html',
  styleUrls: ['./organic-tips.component.scss']
})
export class OrganicTipsComponent implements OnInit {
  showLabel= false;
  items= [{
    product_name: 'Chia Seeds',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/chia.png',
    product_description:'Chia seeds are not just healthy to eat. They are rich in antioxidants and omega-3 fatty acids that do wonders to you skin. It hydrates and helps soothe inflammation while tackling the signs of ageing. Mix some soaked chia seeds with cucumber paste and apply it to your face and neck. Leave on for 20 minutes and rinse it off with water. Once again, massage it while you do so that it exfoliates your skin. This is too one of the most important tips for glowing skin.',
    product_benefits: ' Hydrates skin, etc.',
  },{
    product_name: 'Alovera',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/alovera.png',
    product_description:' Aloverahe modest houseplant is a miracle, wonder plant, often hiding in plain sight. Having been around and used as a medicinal herb, it nourishes the body from the inside – it is rich in nutrients, aids in improving digestion and even boost immunity. Aloe Vera can be used topically too, i.e., its gel can be used to enhance one’s skin, especially the face and the hai',
    product_benefits: 'Helps soothe sunburn, mosturize skin, fights skin ageing, etc.',
  },{
    product_name: 'Potato',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/potato.png',
    product_description: 'This famous kitchen staple is also a natural bleaching agent serving as one of the best tips for glowing skin. The juice from a potato helps reduce and remove dark circles and pigmentation. Grate a potato and squeeze the juice out of it. Soak a cotton ball into the liquid and apply it to the dark circles or spots on your skin. Let the cotton ball sit on the area for 10 minutes before you rinse it off.',
    product_benefits: 'Dark circle removal, skin lighting, tones & firms skin, etc.',
  },{
    product_name: 'Chia Seeds',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/chia.png',
    product_description:'Chia seeds are not just healthy to eat. They are rich in antioxidants and omega-3 fatty acids that do wonders to you skin. It hydrates and helps soothe inflammation while tackling the signs of ageing. Mix some soaked chia seeds with cucumber paste and apply it to your face and neck. Leave on for 20 minutes and rinse it off with water. Once again, massage it while you do so that it exfoliates your skin. This is too one of the most important tips for glowing skin.',
    product_benefits: ' Hydrates skin, etc.',
  },{
    product_name: 'Alovera',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/alovera.png',
    product_description:' Aloverahe modest houseplant is a miracle, wonder plant, often hiding in plain sight. Having been around and used as a medicinal herb, it nourishes the body from the inside – it is rich in nutrients, aids in improving digestion and even boost immunity. Aloe Vera can be used topically too, i.e., its gel can be used to enhance one’s skin, especially the face and the hai',
    product_benefits: 'Helps soothe sunburn, mosturize skin, fights skin ageing, etc.',
  },{
    product_name: 'Potato',
    product_url: 'https://raw.githubusercontent.com/Abhishek0402/Recipe_App/master/src/potato.png',
    product_description: 'This famous kitchen staple is also a natural bleaching agent serving as one of the best tips for glowing skin. The juice from a potato helps reduce and remove dark circles and pigmentation. Grate a potato and squeeze the juice out of it. Soak a cotton ball into the liquid and apply it to the dark circles or spots on your skin. Let the cotton ball sit on the area for 10 minutes before you rinse it off.',
    product_benefits: 'Dark circle removal, skin lighting, tones & firms skin, etc.',
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
