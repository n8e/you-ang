import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Video } from './models/video';

const API_key = 'AIzaSyDKhCtypYjisr86cP_AJCM2pg9bLSrZrrw';

let maxResults = 20, type = '', order = 'date', q;


@Injectable()
export class YoutubeService {
  constructor(private http: Http) {}

  private searchParameter: string;

  private youtubeURL: string = `https://www.googleapis.com/youtube/v3/search?key=${API_key}&part=snippet&q=${q}&maxResults=${maxResults}`;

  getSearchParam(): string {
    return this.searchParameter;
  }

  setSearchParam(str: string): void {
    this.searchParameter = str;
  }

  getVideoResults(q: string): Observable<any> {
    this.setSearchParam(q);
    return this.http.get(this.youtubeURL)
    .map((res: Response) => res.json())
    .catch((err: any) => err);
  }
}
