import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apodData:any = {};

  apiLoaded = false;

  // get today date with momentjs in format YYYY-MM-DD
  dateString = moment().format('YYYY-MM-DD');

  date: { year: number; month: number; } | undefined;
  sub: any;

  constructor() { }

  ngOnInit(): void {

    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

  }

  handleDate(dateString: string) {
    this.dateString = dateString;

  }


}
