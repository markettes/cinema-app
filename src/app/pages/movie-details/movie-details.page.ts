import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    // Obtener el id de la pelicula
    let id = this.route.snapshot.paramMap.get('id');

    // Obtener la información de la llamada a la API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
    })
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
