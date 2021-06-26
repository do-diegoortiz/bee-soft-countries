import { Component, OnInit } from '@angular/core';
import { Imovies } from '../interfaces/movies.interface';

@Component({
  selector: 'app-movies-comp',
  templateUrl: './movies-comp.component.html',
  styleUrls: ['./movies-comp.component.css']
})
export class MoviesCompComponent implements OnInit {

  movies: Imovies[] = [];

  newMovie = {
    name: "",
    genres: [""]
  }

  constructor() { }

  ngOnInit(): void {
  }

  addGenre(genre: string): void {
    if(this.newMovie.genres.includes(genre)) {
      this.newMovie.genres = this.newMovie.genres.filter(movie => movie !== genre);
    }else {
      this.newMovie.genres.push(genre);
    }
  }

  saveMovie(): void {
    const copy = {...this.newMovie}
    this.movies.push(copy)
  }
}
