// Type definition for annotations
export type NestedAnnotation = [number, number, number, number];
export interface AnnotationType extends Array<NestedAnnotation[] | NestedAnnotation[][]> {}

// Type definition for comments
export interface Comment {
  name: string;
  picture: string;
  message: string;
}