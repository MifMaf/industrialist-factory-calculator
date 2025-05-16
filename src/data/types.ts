export type DeepReadOnly<T> = {
  readonly [Key in keyof T]: DeepReadOnly<T[Key]>;
};
