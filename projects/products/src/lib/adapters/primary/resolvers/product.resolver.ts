import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SETS_STATE_PRODUCT_CONTEXT, SetsStateProductContextPort } from '../../../application/ports/secondary/context/sets-state-product.context-port';

@Injectable()
export class ProductResolver implements Resolve<void> {
  constructor(
    @Inject(SETS_STATE_PRODUCT_CONTEXT)
     private _setsStateProductContext: SetsStateProductContextPort
     ) {}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): 
    Observable<void> {
    return this._setsStateProductContext.setProductId({
      selectedProductsId: route.params['productsId'],
      
    });
  }
}
