import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apodData:any = {};

  apiLoaded = false;

  date: { year: number; month: number; } | undefined;
  sub: any;

  constructor(private service:ApodService) { }

  ngOnInit(): void {

    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.service.getApod().subscribe(
      (data) => {
        console.log(data);
        this.apodData = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  handleDate(dateString: string) {
    this.sub = this.service.getApod(dateString).subscribe(
      (data) => {
        console.log(data);
        this.apodData = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }


}
