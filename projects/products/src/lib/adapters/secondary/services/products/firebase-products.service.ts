import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllProductsDtoPort } from '../../../../application/ports/primary/dto/gets-all-products.dto-port';
import { AddsProductsDtoPort } from '../../../../application/ports/secondary/dto/adds-products.dto-port';
import { ProductsDTO } from '../../../../application/ports/primary/dto/products.dto';
import { AddBasicProductCommand } from 'projects/products/src/lib/application/ports/primary/command/add-basic-product.command';
import { AddPricelessProductCommand } from 'projects/products/src/lib/application/ports/primary/command/add-priceless-product.command';
import { AddNamelessProductCommand } from 'projects/products/src/lib/application/ports/primary/command/add-nameless-product.command';

@Injectable()
export class FirebaseProductsService implements GetsAllProductsDtoPort, AddsProductsDtoPort {
  constructor(private _client: AngularFirestore) {
  }
 

  getAll(): Observable<ProductsDTO[]> {
    return this._client.collection<ProductsDTO>('command').valueChanges(({idField: 'id'}));
  }

  addBasicProduct(command: AddBasicProductCommand): Observable<void> {
    const productsDTO: ProductsDTO = {
      id: 1,
      isAvailable: true,
      name: command.name,
      price: {
        currency: command.currency,
        value: command.price,
      }
    }
    return of(void 0);
  }
    
  addPricelessProduct(command: AddPricelessProductCommand): Observable<void> {return of(void 0);}
  
  addNamelessProduct(command: AddNamelessProductCommand): Observable<void> {return of(void 0);}

}
