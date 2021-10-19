import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = [
    new Hero('Batman', 'The Dark Knight'), 
    new Hero('Superman', 'Man of Steel'), 
    new Hero('Spiderman', 'Spidy')];

  constructor() { }

  ngOnInit(): void {
  }

  addHero(newHero: Hero) {
    this.heroes.push(newHero);
    
  }
}
