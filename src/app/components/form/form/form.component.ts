import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero('', '');  

  submitted = false;
  nameFocussed = false;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.submitted = true;
    console.log('Sent: ' + this.model);
    
  }

  newHero() {
    this.model = new Hero('', '');
  }

  onFocused() {
    this.nameFocussed = true;
  }

  onBlurred() {
    this.nameFocussed = false;

  }

}
