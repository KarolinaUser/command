import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseProductsService } from './firebase-products.service';
import { GETS_ALL_PRODUCTS_DTO } from '../../../../application/ports/primary/dto/gets-all-products.dto-port';
import { ADDS_PRODUCTS_DTO } from '../../../../application/ports/secondary/dto/adds-products.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseProductsService, { provide: GETS_ALL_PRODUCTS_DTO, useExisting: FirebaseProductsService }, { provide: ADDS_PRODUCTS_DTO, useExisting: FirebaseProductsService }, ],
  	exports: [] })
export class FirebaseProductsServiceModule {
}
