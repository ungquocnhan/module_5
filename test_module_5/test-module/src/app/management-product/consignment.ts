import {Product} from './product';

export interface Consignment {
  id?: number;
  code?: string;
  product?: Product;
  amount?: number;
  importDate?: string;
  productionDate?: string;
  expirationDate?: string;
}
