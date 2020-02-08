import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  series = [
    {
      title: "Sherlock",
      img: "assets/images/sher.jpg",
      link: "http://localhost:8100/series/tt1475582",
    },
    {
      title: "Breaking Bad",
      img: "assets/images/breakingbad.jpg",
      link: "http://localhost:8100/series/tt0903747",
    },
    {
      title: "The Sopranos",
      img: "assets/images/sop.jpg",
      link: "http://localhost:8100/series/tt0141842",
    },
    {
      title: "Band Of Brothers",
      img: "assets/images/bob.jpg",
      link: "http://localhost:8100/series/tt0185906",
    },

  ]
 mostPopular = [
  {
    title: "Arrow",
    img: "assets/images/arrow.jpg",
    link: "http://localhost:8100/series/tt2193021",
  },
  {
    title: "The Office",
    img: "assets/images/office.jpg",
    link: "http://localhost:8100/series/tt0386676",
  },
  {
    title: "Game of Thrones",
    img: "assets/images/got.jpg",
    link: "http://localhost:8100/series/tt0944947",
  },
  {
    title: "The Walking Dead",
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
