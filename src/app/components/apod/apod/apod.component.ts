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

  selectedDate: NgbDateStruct = {year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()};
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

  handleDate() {
   
    this.sub = this.service.getApod(this.selectedDate.year+'-'+this.selectedDate.month+'-'+this.selectedDate.day).subscribe(
      (data) => {
        console.log(data);
        this.apodData = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  //get video id from url
  //https://www.youtube.com/watch?v=<VIDEO_ID>
  getVideoId(): string {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = this.apodData.url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }

}
