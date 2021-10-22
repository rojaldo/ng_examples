import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerService } from 'src/app/services/beer.service';

import { BeersComponent } from './beers.component';

describe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeersComponent ],
      providers: [BeerService],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
