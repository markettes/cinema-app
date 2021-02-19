import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: [] = [];
  search: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged() {
    console.log('search: ', this.search)
    this.movieService.searchData(this.search).subscribe((res) => {
      console.log('searchChanged: ', res);
      this.results = res;
    });

    console.log('results: ', this.results);

  }

}
