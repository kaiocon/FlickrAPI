import { TestBed } from '@angular/core/testing';

import { FlickrSearchService } from './flickr-search.service';

describe('FlickrSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickrSearchService = TestBed.get(FlickrSearchService);
    expect(service).toBeTruthy();
  });
});
