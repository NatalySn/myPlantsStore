import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  addToCart(productToCart: Product) {
    this.items.push(productToCart);
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
