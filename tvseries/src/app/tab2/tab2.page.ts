import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public topRatedImg = [
    "assets/images/twd.jpg",
    "assets/images/sop.jpg",
    "assets/images/breakingbad.jpg",
    "assets/images/cbl.jpg"
  ];

  public topRatedTitle = [
    "TWD",
    "Sophranos",
    "Br",
    "CH"
  ];

  public topRatedLink = [
    "http://localhost:8100/series/tt1520211",
    "http://localhost:8100/series/tt1520211",
    "http://localhost:8100/series/tt1520211",
    "http://localhost:8100/series/tt1520211"
  ];


  series = [
    {
      title: "TWD",
      img: "assets/images/twd.jpg",
      link: "http://localhost:8100/series/tt1520211",
    },
    {
      title: "bc",
      img: "assets/images/twd.jpg",
      link: "http://localhost:8100/series/tt1520211",
    },
    {
      title: "df",
      img: "assets/images/twd.jpg",
      link: "http://localhost:8100/series/tt1520211",
    },
    {
      title: "asf",
      img: "assets/images/twd.jpg",
      link: "http://localhost:8100/series/tt1520211",
    },


  ]


  result: Observable<any>;
  searchTerm: string = '';

  constructor(private seriesService: SeriesService) {

  }

  ngOnInit() {

  }

  searchChanged() {
    this.result = this.seriesService.searchData(this.searchTerm);
  }
}
