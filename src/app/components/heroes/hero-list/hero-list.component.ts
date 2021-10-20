import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  @Input() myHeroes: Hero[] = [];
  @Output() onHeroRemoved: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('onInit HeroListComponet');
    
  }

  removeHero(index: number) {
    // this.myHeroes.splice(index, 1);
    this.onHeroRemoved.emit(index);
  }

}
