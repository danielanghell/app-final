import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.page.html',
  styleUrls: ['./series-details.page.scss'],
})
export class SeriesDetailsPage implements OnInit {

  information = null;

  constructor(private activatedRoute: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.seriesService.getDetails(id).subscribe(result => {
      console.log('details: ', result);
      this.information = result;
    });
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
