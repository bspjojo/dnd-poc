export interface ComponentDefinition<T = unknown> {
  type: string;
  title: string;
  id: string;
  iconClass: string;
  data?: T;
}
