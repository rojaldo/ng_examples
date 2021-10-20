import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';
  sub: any;

  constructor(private service: CalculatorService) {
    
  }


  ngOnInit(): void {
    console.log('CalculatorComponent');
    this.sub = this.service.display$.subscribe(
      (value: string) => {
        this.display = value;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    console.log('CalculatorComponent destroyed');
    this.sub.unsubscribe();
  }

  handleClickEvent(value: string | number): void {
    if (typeof value === 'number') {
      this.service.handleNumber(value);

    } else if (typeof value === 'string') {
      this.service.handleSymbol(value);
    }

  }

}
