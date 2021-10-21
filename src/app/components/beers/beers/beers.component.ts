import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  data: any = [];
  
  constructor(private service: BeerService) { }

  ngOnInit(): void {
    this.service.getBeers().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

}
