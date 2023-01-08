import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Minimalists Analog Watch',
      price: '109',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image-1.jpeg',
      type: 'Free',
    },
    {
      id: 2,
      name: 'Hisense Ultra HD Smart TV',
      price: '3339',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/product-image-2.jpeg',
      type: 'Premium',
    },
    {
      id: 3,
      name: 'APPLE iPhone 12',
      price: '1855',
      color: 'Black',
      available: 'Not Available',
      image: '/assets/products/product-image-3.jpeg',
      type: 'Premium',
    },
    {
      id: 4,
      name: 'LG Fully Automatic Washing Machine',
      price: '1765',
      color: 'White',
      available: 'Available',
      image: '/assets/products/product-image-4.jpeg',
      type: 'Free',
    },
    {
      id: 5,
      name: 'LG Refrigerator with Door Cooling',
      price: '2815',
      color: 'White',
      available: 'Not Available',
      image: '/assets/products/product-image-5.jpeg',
      type: 'Premium',
    },
    {
      id: 6,
      name: 'DELL Inspiron One 27 Ryzen 7',
      price: '2145',
      color: 'White',
      available: 'Available',
      image: '/assets/products/product-image-6.jpeg',
    },
  ];

  getTotalProducts() {
    return this.products.length;
  }
  getTotalFreeProducts() {
    return this.products.filter((product) => product.type === 'Free').length;
  }

  getTotalPremiumProducts() {
    return this.products.filter((product) => product.type === 'Premium').length;
  }

  productCountRadioButton: string = 'All';
  onFilterRadioButtonChanged(data: string) {
    this.productCountRadioButton = data;
    console.log('Parent component capture value:' + data);
  }
}
