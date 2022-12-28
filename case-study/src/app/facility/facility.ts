import {FacilityType} from './facility-type';
import {RentType} from './rent-type';

export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloor?: number;
  facilityFree?: string;
  facilityType?: FacilityType;
  rentType?: RentType;
  flag?: boolean;
}
