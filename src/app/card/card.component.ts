import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import {userData} from '../userData.json'
import { Product } from '../product';
import { PRODUCTS } from '../products';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private cartService: CartService) {}
  

   
  // добавление продкута в корзину используя сервис
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log(PRODUCTS.length);
    
  }

  // Открываем карточку товара по клику
  selectedProduct?: Product;

  clickProduct(product: Product): void {
    this.selectedProduct = product;
  }
  // Задаем параметр пустого элемента массива и возможности прокрутки


  
  notEmptyCard = true;
  notScrolly = true;
  clicked: boolean = false;

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
      const lastCardId = lastCard.id;
      const newProducts = PRODUCTS.slice(lastCardId, lastCardId + 3);
      if (newProducts.length === 0) {
        this.products = this.products.concat(PRODUCTS.slice(0, 3));
      }
      this.products = this.products.concat(newProducts);
      
      this.notScrolly = true;
    }, 500);
  }

  // Яндекс карты --> работабщий код рандомайзера метки
  yaClick() {
     this.clicked = !this.clicked;
  }


  // Закрытие формы при нажатии закрывающих кнопок
  closeModal() {
    this.clicked = false;
  }
  // myJson:any;
 

  // @ViewChild('phoneNumber') phoneNumber:ElementRef;
  // @ViewChild('emailAdress') emailAdress:ElementRef;
  // @ViewChild('nameUser') nameUser:ElementRef;
  // sendData(){
    
  //   this.myJson = {
  //     phone_number: this.phoneNumber.nativeElement.value,
  //    email_adress:this.emailAdress.nativeElement.value,
  //    name:this.nameUser.nativeElement.value
  //   };
  //   localStorage.setItem('userData', this.myJson);
    
  //   console.log("myJson", this.myJson);
  
  // }
}
