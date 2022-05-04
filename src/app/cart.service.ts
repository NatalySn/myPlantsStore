import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: Product[] = [];
  addToCart(product: Product) {
    
    const productExistInCart = this.items
    .find(({productName}) => productName === product.productName); // ищем продукт по имени
       if (!productExistInCart) {
         this.items.push({...product, num:1}); 
     
         
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
