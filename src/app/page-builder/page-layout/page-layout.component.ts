import { Component, Input } from '@angular/core';
import { FlexPageLayout } from '../models/page.model';

@Component({
  selector: 'pdd-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent {
  @Input() public pageLayout!: FlexPageLayout;

  public addCol(idx: number): void {
    this.pageLayout.columns.splice(idx, 0, { width: '100px', components: [] });
  }

  public removeCol(idx: number): void {
    this.pageLayout.columns.splice(idx, 1);
  }
}
