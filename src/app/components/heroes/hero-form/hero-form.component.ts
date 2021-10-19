import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Output() onHeroAdd = new EventEmitter<Hero>();

  newHeroName = '';
  newHeroDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    this.onHeroAdd.emit(new Hero(this.newHeroName, this.newHeroDescription));
    this.newHeroName = '';
    this.newHeroDescription = '';

  }

}
