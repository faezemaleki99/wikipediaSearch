import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isUtf8 } from 'buffer';
import { format } from 'path';
import { listenerCount } from 'process';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  onSearch(search: string){
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: search,
        origin: '*'
      }
    }) //request output => observable
  }
}
