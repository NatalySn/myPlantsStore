import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';

const mapConfig: YaConfig = {
  apikey: '689f9d9f-8432-4778-8d02-33a8a5cc89d5',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
