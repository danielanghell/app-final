import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgtv',
  template: `
  <ion-card class="tvcard" href="/tabs/tab1">
  <img src="/assets/images/breakingbad.jpg"/>
  <ion-card-header>
    <ion-card-title style="text-align:center">{{"Titlu"}}</ion-card-title>
  </ion-card-header>
  </ion-card>
  `,
  styleUrls: ['./imgtv.component.scss'],
})
export class ImgtvComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
