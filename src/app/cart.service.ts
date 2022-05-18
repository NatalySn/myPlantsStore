import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: Product[] = [];
  addToCart(product: Product) {
    
    const productExistInCart = this.items
    .find(({id}) => id === product.id); // ищем продукт по id
       if (!productExistInCart) {
         this.items.push({...product, num:1}); 
     
         
         return;
       }
       productExistInCart.num += 1;
    
      
       
  }

  

  getItems() {
    return this.items;
  }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }
  constructor() { }
}
