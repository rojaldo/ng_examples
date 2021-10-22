import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateApodComponent } from '../date-apod/date-apod.component';
import { ShowApodComponent } from '../show-apod/show-apod.component';

import { ApodComponent } from './apod.component';

describe('ApodComponent', () => {
  let component: ApodComponent;
  let fixture: ComponentFixture<ApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodComponent, DateApodComponent, ShowApodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
