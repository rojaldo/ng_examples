import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit, OnChanges {

  @Input() selectedDate!: string;
  
  data: any = {};

  constructor(private service: ApodService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes.selectedDate.currentValue){
      this.service.getApod(changes.selectedDate.currentValue).subscribe(data => {
        this.data = data;
      });
    }
    
  }


  //get video id from url
  getVideoId(): string {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = this.data.url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }

}
