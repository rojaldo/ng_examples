import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[] = [];
  sub: any;

  constructor(public service: HeroesService) { 
    this.heroes = this.service.getHeroes();
  }

  ngOnInit(): void {
    
    this.sub = this.service.heroes$.subscribe(
      heroes => this.heroes = heroes
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  

  addHero(newHero: Hero) {
    this.service.addNewHero(newHero);
    
  }

  removeHero(index: number) {
    this.service.removeHero(index);
  }
}
