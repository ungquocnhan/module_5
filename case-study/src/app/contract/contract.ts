import {Facility} from '../facility/facility';
import {Customer} from '../customer/customer';

export interface Contract {
  id?: number;
  facility?: Facility;
  customer?: Customer;
  employee?: string;
  dateStart?: string;
  dateEnd?: string;
  deposit?: number;
  total?: number;
  flag?: boolean;
}
