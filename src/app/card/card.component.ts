import { Component,OnInit} from '@angular/core';


import { Product } from "../product";
import { PRODUCTS } from "../products";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  selectedProduct?: Product;
  constructor() { }
  products = PRODUCTS;
  ngOnInit(): void {
  }

 
  
  public onClick(product:Product): void {
    this.selectedProduct = product;
    console.log(JSON.stringify(PRODUCTS.length));
    
    
    
    
  }
}
