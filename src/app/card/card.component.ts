import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Coordinate } from "./coordinateInterface";
import { Product } from '../product';
import { PRODUCTS } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private cartService: CartService) {
    
  }
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
   
   
   
  }
  
 
  // Открываем карточку товара по клику

  public onClick(product: Product): void {
    this.selectedProduct = product;
    console.log(this.coordinate);
    
    
  }
  // Задаем параметр пустого элемента массива и возможности прокрутки

  notEmptyCard = true;
  notScrolly = true;
  clicked=false;
  selectedProduct?: Product;
 

// загружаем первые 3 поста после загрузки проекта

  ngOnInit(): void {
    this.loadInitPost();
    
  }
  products: any;
  

//  ф-я подгрузки первых товаров

  loadInitPost() {
    this.products = PRODUCTS.slice(0, 3);
    
  }

  // По скроллу грузим следующую партию товаров

  onScroll() {
    console.log('scrolled');
    if (this.notScrolly && this.notEmptyCard) {
      this.notScrolly = false;
      this.loadNextPost();
    }
  }

// ф-я подгрузки следующих товаров путем просиоединения к массиву товаров новых товаров из массива PRODUCTS, 
// пока карта товара не станет пустой у ф-я не прервется
// setTimeOut для большей наглядности происходящего

  loadNextPost() {
    setTimeout(() => {
      const lastCard = this.products[this.products.length - 1];
      const lastPostId = lastCard.id;
      const newProducts = PRODUCTS.slice(lastPostId, lastPostId + 3);
      if (newProducts.length === 0) {
        this.notEmptyCard = false;
      }
      this.products = this.products.concat(newProducts);
      this.notScrolly = true;
    }, 500);
 
  }
  
   coordinates:Coordinate[] =[
        {first:55.832839,second: 37.511435},
        {first:55.707784,second: 37.570011},
        {first:55.684758,second: 37.738521},
        {first:55.760568,second: 37.704088},
        {first:55.726423,second: 37.618056},
        {first:55.832839,second: 37.511435},
        {first:55.707784,second: 37.570011},
        {first:55.684758,second: 37.738521},
        {first:55.760568,second: 37.704088},
      {first:55.726423,second: 37.618056}]
   
    
  coordinate=this.coordinates[Math.ceil(10*Math.random())]
  // Яндекс карты --> работабщий код рандомайзера метки
  yaClick(){
    console.log("clicked");
    this.clicked=true
  }
}
