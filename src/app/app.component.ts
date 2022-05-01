import { Component } from '@angular/core';
import { CartService } from "./cart.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cartService: CartService){}
  title = 'plantsStore';

  // Задаем парметры корзины
  cartOpened=false;
  clicked=false;
  items = this.cartService.getItems();
  totalAmount=0;
totalPrice=0



  // Исход клика по корзине
  // Вывод кол-ва товаров и общей цены
  cartClick(){
  
 this.cartOpened=true;
 this.totalAmount = Object.values(this.items).reduce((a, b) => a + b.num, 0);
  this.totalPrice = Object.values(this.items).reduce((a, b) => a + (b.num*b.productPrice), 0)

  }
 
  // изменение кол-ва товаров
  // изменение вывода кол-ва товаров и цены
  deleteItem(index:any){
    const deleteRegularItem=this.items.splice(index, 1);
    
    if (index=this.items.length-1,index=0) {
      const deletelastItemNum=this.items[index].num;
    const deletelastItemPrice =this.items[index].productPrice;
      this.totalAmount=this.totalAmount-deletelastItemNum;
      this.totalPrice=this.totalPrice-deletelastItemPrice*deletelastItemNum;
     
    }else {
      
      this.totalAmount=this.totalAmount-deleteRegularItem[index].num
      this.totalPrice=this.totalPrice-deleteRegularItem[index].num*deleteRegularItem[index].productPrice
    }
   
   
   
  }
  makeOrder(){
    this.clicked=true
 
  }

  
  
}
