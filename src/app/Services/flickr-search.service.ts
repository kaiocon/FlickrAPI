import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlickrSearchService {

  constructor(private  http: HttpClient) {}

    newSearch(searchTag: string, pageNum: number) {
    const api3 = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + searchTag + '&tagmode=all&format=json';
    const api = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67323733ade1d32b625be418a2d83222&tags='
      + searchTag + '&format=json&per_page=10&page=' + pageNum;
    return this.http.jsonp(api, 'jsoncallback');
    }
}
