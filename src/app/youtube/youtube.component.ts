import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  title: string = 'Youtube Channel';
  searchParam: string;
  videoResults: Array<any>;

  constructor(private _youtubeservice: YoutubeService) { }

  ngOnInit() {
    this.searchParam = this._youtubeservice.getSearchParam();
  }

  search(q: string) {
    // call the API method from the youtube service  and assign it to 'this.result'
    return this._youtubeservice.getVideoResults(q).subscribe(data => {
      this.videoResults = data.items;
      this.videoResults.map((vid: any): any => {
        vid.youtubeURL = `https://www.youtube.com/embed/${vid.id.videoId}`;
        return vid;
      });
      console.log('YCYHJV', this.videoResults);
      return this.videoResults;
    });
  }
}
