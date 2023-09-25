// URLs for the data sources
export const ANNOTATION_URL = "https://reach-industries-candidate-tests.s3.eu-west-2.amazonaws.com/FrontendCandidateTest-FINAL.json";
export const VIDEO_URL = "https://reach-industries-candidate-tests.s3.eu-west-2.amazonaws.com/FrontendCandidateTest-FINAL.mp4";

// Sidebar videos mock data
export const videoSuggestionMock = [
  { title: "Video 1", desc: "Sample description for video 1", duration: "4:20", thumbnail: "https://via.placeholder.com/120x120" },
  { title: "Video 2", desc: "Another sample description", duration: "3:15", thumbnail: "https://via.placeholder.com/120x120" },
  { title: "Video 3", desc: "Yet another sample description", duration: "5:10", thumbnail: "https://via.placeholder.com/120x120" },
  { title: "Video 4", desc: "Final video description", duration: "2:45", thumbnail: "https://via.placeholder.com/120x120" },
];

// Default styles for annotations
export const DEFAULT_ANNOTATION_STYLE = {
  left: '0px',
  top: '0px',
  width: '0px',
  height: '0px',
};

// Define base dimensions which are used as a reference for the original video dimensions
export const BASE_WIDTH = 1280;
export const BASE_HEIGHT = 720;
