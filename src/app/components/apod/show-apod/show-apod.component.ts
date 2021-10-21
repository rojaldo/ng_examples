import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit {

  @Input() data: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  //get video id from url
  getVideoId(): string {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = this.data.url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }

}
