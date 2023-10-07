import { Component, EventEmitter, Output } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'pdd-page-col-dropzone',
  templateUrl: './page-col-dropzone.component.html',
  styleUrls: ['./page-col-dropzone.component.scss']
})
export class PageColDropzoneComponent {
  @Output() public onItemDropped = new EventEmitter<DndDropEvent>();

  public onDragCanceled(event: DragEvent): void {

    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  public onDragover(event: DragEvent): void {

    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent) {
    this.onItemDropped.emit(event);
  }
}
