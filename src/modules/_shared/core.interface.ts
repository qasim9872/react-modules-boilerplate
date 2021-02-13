export interface BaseModule {
  name: string;
  providers?: React.FC<{}>[];
}

export default interface CoreModule<T> extends BaseModule {
  providers: React.FC<{}>[];
  view: React.FC<T>;
}
