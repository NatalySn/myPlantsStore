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
  // добавление продкута в корзину используя сервис
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(product.productName+' добавлен в корзину!');
    
       
   
   
  }
  
 
  // Открываем карточку товара по клику

  public onClick(product: Product): void {
    this.selectedProduct = product;
   
    
    
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
  
   
  // Яндекс карты --> работабщий код рандомайзера метки
  yaClick(){
    console.log("clicked");
    this.clicked=true
  }
}
