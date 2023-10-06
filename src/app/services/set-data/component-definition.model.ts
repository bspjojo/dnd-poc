export interface ComponentDefinition<T = any> {
  type: string;
  title: string;
  id: string;
  iconClass: string;
  data?: T;
}