import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  data: any[] = [];
  beers: any[] = [];

  minValue: number = 3;
  maxValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 70,
    step: 0.1
  };

  constructor(private service: BeerService) { }

  ngOnInit(): void {
    this.service.getBeers().subscribe(data => {
      this.data = data;
      this.beers = this.data.filter(beer => beer.abv >= this.minValue && beer.abv <= this.maxValue).sort((a, b) => a.abv - b.abv);
      console.log(data);
    });
  }

  handleChange() {
    this.beers = this.data.filter(beer => beer.abv >= this.minValue && beer.abv <= this.maxValue).sort((a, b) => a.abv - b.abv);
  }

}
