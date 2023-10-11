import { Component, Input } from '@angular/core';
import { DndDropEvent, DropEffect, EffectAllowed } from 'ngx-drag-drop';
import { ComponentDefinition } from 'src/app/services/set-data/component-definition.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'pdd-page-col-def',
  templateUrl: './page-col-def.component.html',
  styleUrls: ['./page-col-def.component.scss']
})
export class PageColDefComponent {
  @Input() public columnComponents!: ComponentDefinition[];

  public draggableMeta = Object.freeze({
    effectAllowed: 'all' as EffectAllowed,
    disable: false
  });

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (event?.data?.id == null) {
      event.data.id = uuidv4();
    }

    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      list.splice(index, 0, event.data);
    }
  }
}
