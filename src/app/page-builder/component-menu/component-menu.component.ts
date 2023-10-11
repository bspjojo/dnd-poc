import { Component } from '@angular/core';
import { DndDropEvent, EffectAllowed } from 'ngx-drag-drop';
import { ComponentDefinitionService } from 'src/app/services/set-data/component-definition.service';

@Component({
  selector: 'pdd-component-menu',
  templateUrl: './component-menu.component.html',
  styleUrls: ['./component-menu.component.scss']
})
export class ComponentMenuComponent {
  public componentData = this.componentDefinitionService.getComponents();

  public draggableMeta = Object.freeze({
    effectAllowed: 'all' as EffectAllowed,
    disable: false
  });

  constructor(
    private componentDefinitionService: ComponentDefinitionService
  ) { }


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
