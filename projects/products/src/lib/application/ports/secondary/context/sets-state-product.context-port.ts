import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetProductIdCommand } from '../../primary/command/set-product-id.command';
import { SetPromotedProductIdCommand } from '../../primary/command/set-promoted-product-id.command';
import { ProductContext } from './product.context';

export const SETS_STATE_PRODUCT_CONTEXT = new InjectionToken<SetsStateProductContextPort>('SETS_STATE_PRODUCT_CONTEXT');

export interface SetsStateProductContextPort {
  setProductId(command: SetProductIdCommand): Observable<void>;
  setPromotedProductId(command: SetPromotedProductIdCommand): Observable<void>;
}
