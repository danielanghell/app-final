import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  topRated = [
    {
      title: "The Godfather",
      img: "assets/images/godf.jpg",
      link: "http://localhost:8100/movies/tt0068646",
    },
    {
      title: "Batman The Dark Knight",
      img: "assets/images/batman.jpg",
      link: "http://localhost:8100/movies/tt2098632",
    },
    {
      title: "Pulp Fiction",
      img: "assets/images/pulp.jpg",
      link: "http://localhost:8100/movies/tt0110912",
    },
    {
      title: "Star Wars:A New Hope",
      img: "assets/images/sw.jpg",
      link: "http://localhost:8100/movies/tt0076759",
    },

  ]
 mostPopular = [
  {
    title: "Joker",
    img: "assets/images/joker.jpg",
    link: "http://localhost:8100/movies/tt7286456",
  },
  {
    title: "The Irishman",
    img: "assets/images/irish.jpg",
    link: "http://localhost:8100/movies/tt1302006",
  },
  {
    title: "The LightHouse",
    img: "assets/images/light.jpg",
    link: "http://localhost:8100/movies/tt7984734",
  },
  {
    title: "Jojo Rabbit",
    img: "assets/images/jojo.jpg",
    link: "http://localhost:8100/movies/tt2584384",
  },
 ]
  result: Observable<any>;
  searchTerm: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {

  }

  searchChanged() {
    this.result = this.movieService.searchData(this.searchTerm);
  }

}
