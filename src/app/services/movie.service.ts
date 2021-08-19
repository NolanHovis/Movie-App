import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movies/movie.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = []

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http
      .get<Movie[]>('https://codelabs2021.herokuapp.com/api/v1/movies/index')
  }

  addMovie(movie: Movie) {
    this.http
      .post<any>('https://codelabs2021.herokuapp.com/api/v1/movies/create', movie).subscribe({
        next: data => {
          movie.id = data.id
        }
      })
  }
}
