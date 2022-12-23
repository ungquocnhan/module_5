import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  // @ts-ignore
  public count(n1: number, n2: number, operator: string): number{
    // tslint:disable-next-line:no-debugger
    switch (operator) {
      case 'ADDITION':
        return n1 + n2;
      case 'SUBTRACTION':
        return n1 - n2;
      case 'MULTIPLICATION':
        return n1 * n2;
      case 'DIVISION':
        return n1 / n2;
    }
  }
}
