import { NestedAnnotation } from "../types/types";

// Helper function to check if a given value is of type NestedAnnotation
export const isNestedAnnotation = (value: any): value is NestedAnnotation => {
  return Array.isArray(value) && value.length === 4 && value.every(item => typeof item === 'number');
}