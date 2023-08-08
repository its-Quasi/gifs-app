import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBarComponent,
    CardListComponent,
    GifCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
