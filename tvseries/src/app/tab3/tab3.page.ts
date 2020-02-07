import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  result: Observable<any>;
  searchTerm: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {

  }

  searchChanged() {
    this.result = this.movieService.searchData(this.searchTerm);
  }

}
