import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBasicProductCommand } from '../../primary/command/add-basic-product.command';
import { AddNamelessProductCommand } from '../../primary/command/add-nameless-product.command';
import { AddPricelessProductCommand } from '../../primary/command/add-priceless-product.command';


export const ADDS_PRODUCTS_DTO = new InjectionToken<AddsProductsDtoPort>('ADDS_PRODUCTS_DTO');

export interface AddsProductsDtoPort {
  addBasicProduct(command: AddBasicProductCommand): Observable<void>;
  addPricelessProduct(command: AddPricelessProductCommand): Observable<void>;
  addNamelessProduct(command: AddNamelessProductCommand): Observable<void>;
  
}

 
