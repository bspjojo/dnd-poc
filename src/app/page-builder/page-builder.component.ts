import { Component, OnInit } from '@angular/core';
import { Page } from './models/page.model';

@Component({
  selector: 'pdd-page-builder',
  templateUrl: './page-builder.component.html',
  styleUrls: ['./page-builder.component.scss']
})
export class PageBuilderComponent implements OnInit {
  public pageModel!: Page;

  public ngOnInit(): void {
    this.pageModel = {
      title: 'Page1',
      route: '/r1',
      contentLayout: {
        type: 'flex',
        columns: [{
          width: '33%',
          components: []
        }]
      }
    };
  }
}
