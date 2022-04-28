import { Component } from '@angular/core';
import { CartService } from "./cart.service";
import { Product } from "./product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cartService: CartService){}
  title = 'plantsStore';

  // Задаем парметры корзины
  cartOpened=false
  clicked=false
  items = this.cartService.getItems();

  // Исход клика по корзине
  cartClick(){
    
 this.cartOpened=true

  }
 
  deleteItem(index:any){
  
     
    this.items.splice(index, 1);
    
   
  }
  makeOrder(){
    this.clicked=true
  }
  
}
