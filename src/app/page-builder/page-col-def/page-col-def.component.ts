import { Component } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'pdd-page-col-def',
  templateUrl: './page-col-def.component.html',
  styleUrls: ['./page-col-def.component.scss']
})
export class PageColDefComponent {
  public data: any[] = [];

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

    this.data.push(event.data);
  }
}