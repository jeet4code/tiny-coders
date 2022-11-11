import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() showLabel= false;
  @Input() items= [{
  product_name: 'Lakme',
  product_url: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23414_H_8901030907487_600x.jpg',
  product_benefits: 'Glows skin',
  product_rating : 4,
  product_rating_count: 555,
  product_redirect_url: 'https://www.lakmeindia.com/collections/serums/products/23414-lapr-brighten-srm-w-vita-resorcinol-30m',
},{
  product_name: 'Lakme',
  product_url: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23414_H_8901030907487_600x.jpg',
  product_benefits: 'Glows skin',
  product_rating : 3,
  product_rating_count: 555,
  product_redirect_url: 'https://www.lakmeindia.com/collections/serums/products/23414-lapr-brighten-srm-w-vita-resorcinol-30m',
},{
  product_name: 'Lakme',
  product_url: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23414_H_8901030907487_600x.jpg',
  product_benefits: 'Glows skin',
  product_rating : 5,
  product_rating_count: 555,
  product_redirect_url: 'https://www.lakmeindia.com/collections/serums/products/23414-lapr-brighten-srm-w-vita-resorcinol-30m',
},{
  product_name: 'Lakme',
  product_url: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23414_H_8901030907487_600x.jpg',
  product_benefits: 'Glows skin',
  product_rating : 4,
  product_rating_count: 555,
  product_redirect_url: 'https://www.lakmeindia.com/collections/serums/products/23414-lapr-brighten-srm-w-vita-resorcinol-30m',
},{
  product_name: 'Lakme',
  product_url: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23414_H_8901030907487_600x.jpg',
  product_benefits: 'Glows skin',
  product_rating : 3,
  product_rating_count: 555,
  product_redirect_url: 'https://www.lakmeindia.com/collections/serums/products/23414-lapr-brighten-srm-w-vita-resorcinol-30m',
},{
  product_name: 'Lakme',
  product_url: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23414_H_8901030907487_600x.jpg',
  product_benefits: 'Glows skin',
  product_rating : 5,
  product_rating_count: 555,
  product_redirect_url: 'https://www.lakmeindia.com/collections/serums/products/23414-lapr-brighten-srm-w-vita-resorcinol-30m',
},{
  product_name: 'Lakme',
  product_url: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23414_H_8901030907487_600x.jpg',
  product_benefits: 'Glows skin',
  product_rating : 4,
  product_rating_count: 555,
  product_redirect_url: 'https://www.lakmeindia.com/collections/serums/products/23414-lapr-brighten-srm-w-vita-resorcinol-30m',
},{
  product_name: 'Lakme',
  product_url: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23414_H_8901030907487_600x.jpg',
  product_benefits: 'Glows skin',
  product_rating : 3,
  product_rating_count: 555,
  product_redirect_url: 'https://www.lakmeindia.com/collections/serums/products/23414-lapr-brighten-srm-w-vita-resorcinol-30m',
},{
  product_name: 'Lakme',
  product_url: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23414_H_8901030907487_600x.jpg',
  product_benefits: 'Glows skin',
  product_rating : 5,
  product_rating_count: 555,
  product_redirect_url: 'https://www.lakmeindia.com/collections/serums/products/23414-lapr-brighten-srm-w-vita-resorcinol-30m',
},
{
  product_name: 'Lakme',
  product_url: 'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/23414_H_8901030907487_600x.jpg',
  product_benefits: 'Glows skin',
  product_rating : 4,
  product_rating_count: 555,
  product_redirect_url: 'https://www.lakmeindia.com/collections/serums/products/23414-lapr-brighten-srm-w-vita-resorcinol-30m',
}];
  constructor() { }

  ngOnInit(): void {

  }

}