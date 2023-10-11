import { ComponentDefinition } from 'src/app/services/set-data/component-definition.model';

export interface Page {
  title: string;
  route: string;
  contentLayout: FlexPageLayout;
}

export interface BasePageLayout {
  type: 'flex' | 'grid';
}

export interface FlexPageLayout extends BasePageLayout {
  type: 'flex';
  columns: PageColumnDefinition[];
}

export interface PageColumnDefinition {
  width: string;
  components: ComponentDefinition[];
}
