import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
 
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
  
    HttpClientModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
