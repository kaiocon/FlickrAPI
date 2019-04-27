import { Component } from '@angular/core';
import {FlickrSearchService} from './Services/flickr-search.service';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlickrSearchService]
})
export class AppComponent {
  title = 'FlickrAPI';
  input: string;
  items: any[];
  page = 1;

  constructor(private api: FlickrSearchService) {}
  Search() {
    this.api.newSearch(this.input, this.page).subscribe ((result: any) => {
      if (this.items != null) {this.items.push(...result.photos.photo); } else {this.items = result.photos.photo; }
      console.log (result);
      console.log (this.items);
    });
}
    clear() {
    this.items = [];
    this.page = 1;
    console.log(this.items);
}
  onScroll() {
    console.log('Scrolled');
    this.page = this.page + 1;
    this.Search();
  }
  popup() {
    alert('Modal box here');
  }
}
