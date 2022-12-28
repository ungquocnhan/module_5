import {Facility} from '../facility/facility';
import {Customer} from '../customer/customer';

export interface Contract {
  id?: number;
  facility?: Facility;
  customer?: Customer;
  employee?: string;
  startDate?: string;
  endDate?: string;
  deposit?: number;
  total?: number;
  flag?: boolean;
}
