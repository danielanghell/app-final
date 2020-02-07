import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public topRated = [
    "assets/images/twd.jpg",
    "assets/images/sop.jpg",
    "assets/images/breakingbad.jpg",
    "assets/images/cbl.jpg"
  ];

  result: Observable<any>;
  searchTerm: string = '';

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {

  }

  searchChanged() {
    this.result = this.seriesService.searchData(this.searchTerm);
  }
}
