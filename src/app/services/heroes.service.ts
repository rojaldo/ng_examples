import { EventEmitter, Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes = [
    new Hero('Batman', 'The Dark Knight'), 
    new Hero('Superman', 'Man of Steel'), 
    new Hero('Spiderman', 'Spidy')];

  heroes$: EventEmitter<Hero[]> = new EventEmitter<Hero[]>();
    
  constructor() { }

  getHeroes(): Hero[]{
    return [...this.heroes];
  }

  addNewHero(hero: Hero) {
    this.heroes.push(hero);
    this.heroes$.emit([...this.heroes]);
  }

  removeHero(index: number) {
    this.heroes.splice(index, 1);
    this.heroes$.emit([...this.heroes]);
  }

}
