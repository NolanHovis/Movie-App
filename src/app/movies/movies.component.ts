import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieForm: FormGroup
  newMovie = false
  editMovie = false
  addOrCancel = 'Add'
  movies: Movie[] =[]
  id: number

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchMovies()

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMovie = params['id'] != null;
      this.initForm()
    })
  }

  fetchMovies() {
    this.movieService.getMovies().subscribe((data: any) => {
      console.table(data.payload)
      this.movies = data.payload
    })
  }

  onAddMovie() {
    this.newMovie = !this.newMovie
    if (this.newMovie) {
      this.addOrCancel = 'Cancel'
    }
    if (!this.newMovie) {
      this.addOrCancel = 'Add'
    }
  }

  onSubmitMovie() {
    const movieToAdd = this.movieForm
    if(this.editMovie) {
      //updating movie
    }
    else {
      console.table(this.movieForm.value)
      this.movieService.addMovie(movieToAdd.value)
    }
    this.onAddMovie()
  }

  private initForm() {
    let movieTitle = ''
    let movieDirector = ''
    let movieYear = ''
    let movieIncome = ''
    let movieDuration = ''
    let movieRating = ''

    if (this.editMovie) {

    }

    this.movieForm = new FormGroup({
      'title' : new FormControl(movieTitle, Validators.required),
      'director' : new FormControl(movieDirector, Validators.required),
      'year' : new FormControl(movieYear, Validators.required),
      'income' : new FormControl(movieIncome, Validators.required),
      'duration' : new FormControl(movieDuration, Validators.required),
      'parental_rating' : new FormControl(movieRating, Validators.required)
    })
  }

}
