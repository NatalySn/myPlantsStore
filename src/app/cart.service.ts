import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: Product[] = [];
  addToCart(product: Product) {
   
    const productExistInCart = this.items
    .find(({productName}) => productName === product.productName); // find product by name
       if (!productExistInCart) {
         this.items.push({...product, num:1}); 
         // enhance "porduct" opject with "num" property
         return;
       }
       productExistInCart.num += 1;
  }

  

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() { }
}
