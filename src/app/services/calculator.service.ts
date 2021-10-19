import { EventEmitter, Injectable } from '@angular/core';

enum State {
  Init,
  FirstFigure,
  SecondFigure,
  Result
}

@Injectable()
export class CalculatorService {

  private display = '';
  private currentState = State.Init;
  private firstFigure = 0;
  private secondFigure = 0;
  private result = 0;
  private operator = '';

  display$ = new EventEmitter<string>();

  constructor() { }

  handleNumber(value: number): void {
    switch (this.currentState) {
      case State.Init:
        this.firstFigure = value;
        this.currentState = State.FirstFigure;
        this.display += value.toString();
        this.display$.emit(this.display);
        break;
      case State.FirstFigure:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display += value.toString();
        this.display$.emit(this.display);
        break;
      case State.SecondFigure:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value.toString();
        this.display$.emit(this.display);
        break;
      case State.Result:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.currentState = State.FirstFigure;
        this.display = value.toString();
        this.display$.emit(this.display);
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
          this.display$.emit(this.display);
        }
        break;
      case State.SecondFigure:
        if(value === '='){
          this.result = this.calculate();
          this.currentState = State.Result;
          this.display += value + this.result.toString();
          this.display$.emit(this.display);
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
          this.display$.emit(this.display);
        }
        break;

      default:
        break;
    }

  }

}
