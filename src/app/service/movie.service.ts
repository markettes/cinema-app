import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  key = 'c7c741b9';
  link = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  searchData(title: string): Observable<any> {
    return this.http.get(`${this.link}?s=${encodeURI(title)}&apikey=${this.key}`)
    .pipe(
      map((results: any) => {
        console.log('res ', results.Search);
        return results.Search
      })
    );
  }

  getDetails(id: string) {
    return this.http.get(`${this.link}?i=${id}&plot=full&apikey=${this.key}`);
  }

}
