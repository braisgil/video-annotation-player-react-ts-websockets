# Reach Industries Frontend Assessment

This project is a single-page application that visualizes a video with annotations and displays live comments. It was built using React and TypeScript.

## Table of Contents

- [Overview](#overview)
- [Design Solutions](#design-solutions)
- [Deployment](#deployment)
- [Running the Application Locally](#running-the-application-locally)
- [Libraries Used](#libraries-used)
- [Known Issues](#known-issues)
- [Future Improvements](#future-improvements)

## Overview

The primary objectives of this project were:
- Display an MP4 video with synchronized annotation data.
- Show live comments powered by a WebSocket.
- Show raw JSON data of the annotations.
- Make the application responsive for mobile devices.

## Design Solutions

### 1. **Component Structure**: 
- The application is modularized into various components to ensure a separation of concerns and enhance code reusability.
  
### 2. **Context & Hooks**: 
- We use the React context to store and manage our data, ensuring efficient data propagation without prop-drilling.
- Custom hooks (`useAnnotations`, `useLiveComments`, and `useWebSocket`) handle data fetching and WebSocket interactions, keeping the component logic clean and focused.

### 3. **Annotations Over Video**: 
- Annotations are calculated and positioned over the video using the `computeAnnotationStyle` utility function.
  
### 4. **WebSockets**: 
- Live comments are fetched in real-time using the `useWebSocket` hook, ensuring users see comments immediately upon their arrival.
  
### 5. **Responsive Design**: 
- The sidebar collapses into a hamburger menu on smaller screen sizes, ensuring usability across devices.

## Deployment

The application is deployed using Vercel and can be accessed [here](https://reach-industries-neon.vercel.app).

## Running the Application Locally

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to launch the application.

## Libraries Used

- **React**: Used for building the UI of the application.
- **TypeScript**: Provides static type checking to enhance code quality.
- **Tailwind CSS**: Used for styling and achieving a responsive design.

## Known Issues

- The live comments section is currently not functional on the deployed version due to the WebSocket being provided in `ws` rather than `wss`, leading to security issues on HTTPS deployments. The feature works correctly on local setups.

## Future Improvements

1. **Error Handling**: More comprehensive error handling, especially for WebSocket interruptions and reconnections.
2. **Pagination**: As the comment section grows, pagination can ensure the UI remains manageable.
3. **Performance**: Implement lazy loading and React's `React.memo` where necessary to optimize rendering performance.
