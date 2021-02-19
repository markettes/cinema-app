import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  search: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.movieService.searchData(this.search);

  }

}
