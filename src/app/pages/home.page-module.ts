import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseProductsServiceModule, ProductsComponentModule } from '@products';
import { HomePage } from './home.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  ProductsComponentModule,
  FirebaseProductsServiceModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
