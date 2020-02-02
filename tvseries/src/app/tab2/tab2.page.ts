import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  result: Observable<any>;
  searchTerm: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {

  }

  searchChanged() {
    this.result = this.movieService.searchData(this.searchTerm);
  }
}
