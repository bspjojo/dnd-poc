import { Component } from '@angular/core';
import { DndDropEvent, EffectAllowed } from 'ngx-drag-drop';

@Component({
  selector: 'pdd-component-menu',
  templateUrl: './component-menu.component.html',
  styleUrls: ['./component-menu.component.scss']
})
export class ComponentMenuComponent {

  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost
    data: { componentType: 't1', name: 'cName' },
    effectAllowed: 'all' as EffectAllowed,
    disable: false,
    handle: false
  };

  onDragStart(event: DragEvent) {

    console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {

    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {

    console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {

    console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDraggableMoved(event: DragEvent) {

    console.log("draggable moved", JSON.stringify(event, null, 2));
  }

  onDragCanceled(event: DragEvent) {

    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {

    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent) {

    console.log("dropped", JSON.stringify(event, null, 2));
  }
}
