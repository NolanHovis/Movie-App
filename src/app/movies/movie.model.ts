export class Movie {

  id: number;
  title: string;
  director: string;
  description: string;
  year: number;
  total_gross: number;
  cast: string[];
  duration: number;
  parental_rating: string;

  constructor(
    id: number,
    title: string,
    director: string,
    description: string,
    year: number,
    total_gross: number,
    cast: string[],
    duration: number,
    parental_rating: string
  ) {

    this.id = id;
    this.title = title;
    this.director = director;
    this.description = description;
    this.year = year;
    this.total_gross = total_gross;
    this.cast = cast;
    this.duration = duration;
    this.parental_rating = parental_rating;

  }
}
