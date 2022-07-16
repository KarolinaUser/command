import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDTO } from '../../../../application/ports/primary/dto/products.dto';
import { GETS_ALL_PRODUCTS_DTO, GetsAllProductsDtoPort } from '../../../../application/ports/primary/dto/gets-all-products.dto-port';


@Component({ selector: 'lib-products', templateUrl: './products.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ProductsComponent {
  list$: Observable<ProductsDTO[]> = this._getsAllProductsDto.getAll();

  constructor
  (@Inject(GETS_ALL_PRODUCTS_DTO) private _getsAllProductsDto: 
  GetsAllProductsDtoPort) {
  }
}

