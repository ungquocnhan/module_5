import {Manufacture} from './manufacture';

export interface Product {
  id?: number;
  code?: string;
  name?: string;
  dateProduct?: string;
  description?: string;
  manufacture?: Manufacture;
}
