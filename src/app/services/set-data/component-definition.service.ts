import { Injectable } from '@angular/core';
import { ComponentDefinition } from './component-definition.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentDefinitionService {
  public getComponents(): ComponentDefinition[] {
    return [
      {
        iconClass: 'form',
        title: 'Form',
        type: 'form'
      },
      {
        iconClass: 'image',
        title: 'Image',
        type: 'image'
      },
      {
        iconClass: 'article',
        title: 'Article',
        type: 'text'
      }
    ];
  }
}
