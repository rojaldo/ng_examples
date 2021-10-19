import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

enum State {
  Init,
  FirstFigure,
  SecondFigure,
  Result
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  currentState = State.Init;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleNumber(value: number): void {
    switch (this.currentState) {
      case State.Init:
        this.firstFigure = value;
        this.currentState = State.FirstFigure;
        this.display += value.toString();
        break;
      case State.FirstFigure:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display += value.toString();
        break;
      case State.SecondFigure:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value.toString();
        break;
      case State.Result:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.currentState = State.FirstFigure;
        this.display = value.toString();
        break;

      default:
        break;
    }
  }

  calculate(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        return 0;
    }
  }

  handleSymbol(value: string): void {
    switch (this.currentState) {
      case State.Init:

        break;
      case State.FirstFigure:
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          this.operator = value;
          this.currentState = State.SecondFigure;
          this.display += value;
        }
        break;
      case State.SecondFigure:
        if(value === '='){
          this.result = this.calculate();
          this.currentState = State.Result;
          this.display += value + this.result.toString();
        }
        break;
      case State.Result:
        if(value === '+' || value === '-' || value === '*' || value === '/') {
          this.firstFigure = this.result;
          this.operator = value;
          this.secondFigure = 0;
          this.result = 0;
          this.currentState = State.SecondFigure;
          this.display = this.firstFigure.toString() + value;
        }
        break;

      default:
        break;
    }


  }

  handleClickEvent(value: string | number): void {
    if (typeof value === 'number') {
      this.handleNumber(value);

    } else if (typeof value === 'string') {
      this.handleSymbol(value);
    }

  }

}
