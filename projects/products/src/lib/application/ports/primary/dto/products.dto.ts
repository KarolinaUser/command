import { PriceDTO } from "../../secondary/dto/price.dto";

export interface ProductsDTO {
  readonly id: number;
  readonly name: string;
  readonly price: PriceDTO;
  readonly isAvailable: boolean;
}
