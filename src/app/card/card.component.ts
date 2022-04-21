import { Component,OnInit} from '@angular/core';
import { Product } from "../product";
import { PRODUCTS } from "../products";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  // productImage=products[1].productImage
  // productName=products[1].productName
  // productDescription = products[1].productDescription
  constructor() { }
  products = PRODUCTS;
  ngOnInit(): void {
  }
}
