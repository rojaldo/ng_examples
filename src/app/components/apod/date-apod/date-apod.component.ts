import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-apod',
  templateUrl: './date-apod.component.html',
  styleUrls: ['./date-apod.component.scss']
})
export class DateApodComponent implements OnInit {

  @Output() onDateSelected = new EventEmitter<string>();

  selectedDate: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()};
  
  constructor() { }

  ngOnInit(): void {
  }

  handleDate() {
    this.onDateSelected.emit(this.selectedDate.year + '-' + this.selectedDate.month + '-' + this.selectedDate.day);
  }
}
