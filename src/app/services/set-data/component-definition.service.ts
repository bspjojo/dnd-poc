import { Injectable } from '@angular/core';
import { ComponentDefinition } from './component-definition.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentDefinitionService {

  constructor() { }

  public getComponents(): ComponentDefinition<any>[] {
    return [
      {
        iconClass: 'form',
        id: 'form-id',
        title: 'Form',
        type: 'form'
      },
      {
        iconClass: 'image',
        id: 'image-id',
        title: 'Image',
        type: 'image'
      },
      {
        iconClass: 'article',
        id: 'article-id',
        title: 'Article',
        type: 'text'
      }
    ];
  }
}
