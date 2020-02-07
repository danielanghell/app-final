import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  url = 'http://www.omdbapi.com/';
  apiKey = '27223cda';

  constructor(private http: HttpClient) { }

  searchData(title: string): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=series&apikey=${this.apiKey}`).pipe(
      map(results => {
        console.log('RAW', results);
        return results['Search'];
      })
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
