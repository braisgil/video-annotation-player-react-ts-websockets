import { BASE_WIDTH, BASE_HEIGHT } from "./constants";

// Function to compute CSS properties for annotations based on video dimensions
export const computeAnnotationStyle = (left: number, top: number, width: number, height: number, videoWidth: number, videoHeight: number) => ({
  left: `${(left / BASE_WIDTH) * videoWidth}px`,
  top: `${(top / BASE_HEIGHT) * videoHeight}px`,
  width: `${(width / BASE_WIDTH) * videoWidth}px`,
  height: `${(height / BASE_HEIGHT) * videoHeight}px`,
});