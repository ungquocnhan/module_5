import {Component, OnInit} from '@angular/core';
import {Calculator} from '../calculator';
import {CalculatorService} from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  constructor(private calculatorService: CalculatorService) {
  }

  calculator: Calculator = {
    operator: '',
    firstOperand: 0,
    secondOperand: 0
  };
  public result = '';

  ngOnInit(): void {
  }

  input1(target: any): void {
    console.log(target.value);
    this.calculator.firstOperand = Number(target.value);
  }

  input2(target: any): void {
    console.log(target.value);
    this.calculator.secondOperand = Number(target.value);
  }

  getOperator(target: string): void {
    console.log(target);
    this.calculator.operator = target;
    switch (this.calculator.operator) {
      case 'ADDITION':
        this.result = String(this.calculator.firstOperand + this.calculator.secondOperand);
        break;
      case 'SUBTRACTION':
        this.result = String(this.calculator.firstOperand - this.calculator.secondOperand);
        break;
      case 'MULTIPLICATION':
        this.result = String(this.calculator.firstOperand * this.calculator.secondOperand);
        break;
      case 'DIVISION':
        this.result = String(this.calculator.firstOperand / this.calculator.secondOperand);
        break;
    }
  }
}
