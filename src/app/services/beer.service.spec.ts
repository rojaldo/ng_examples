import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';

describe('BeerService', () => {
  let service: BeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(BeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
