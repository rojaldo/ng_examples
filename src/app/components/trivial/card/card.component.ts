import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  @Output() onAnswer = new EventEmitter<boolean>();

  classArray = ['btn btn-primary btn-block', 'btn btn-primary btn-block', 'btn btn-primary btn-block', 'btn btn-primary btn-block'];

  constructor() { }

  ngOnInit(): void {
  }

  handleAnswer(answer: string) {
    this.card.responded = true;
    this.card.answer = answer;
    this.card.correct = (this.card.rightAnswer === answer);
    this.classArray = [];
    for (const answer of this.card.answers) {
      this.classArray.push(this.getButtonClass(answer));
    }
    this.onAnswer.emit(this.card.correct);
  }

  getButtonClass(answer: string): string {
    if (!this.card.responded) {
      return 'btn btn-primary btn-block';
    } else {
      if (answer === this.card.rightAnswer) {
        return 'btn btn-success btn-block';
      } else if (!this.card.correct && answer === this.card.answer) {
        return 'btn btn-danger btn-block';
      } else {
        return 'btn btn-secondary btn-block';
      }
    }
  }
}
