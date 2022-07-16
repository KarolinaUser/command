import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDTO } from './products.dto';

export const GETS_ALL_PRODUCTS_DTO = new InjectionToken<GetsAllProductsDtoPort>('GETS_ALL_PRODUCTS_DTO');

export interface GetsAllProductsDtoPort {
  getAll(): Observable<ProductsDTO[]>;
}
