import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DndModule } from 'ngx-drag-drop';
import { ComponentMenuComponent } from './component-menu/component-menu.component';
import { PageBuilderComponent } from './page-builder.component';
import { PageColDefComponent } from './page-col-def/page-col-def.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  declarations: [
    PageBuilderComponent,
    ComponentMenuComponent,
    PageLayoutComponent,
    PageColDefComponent
  ],
  exports: [
    PageBuilderComponent,
  ],
  imports: [
    CommonModule,
    DndModule
  ]
})
export class PageBuilderModule { }
