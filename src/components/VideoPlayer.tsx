// Component responsible for displaying the video playback 
// along with dynamic annotations synced to the current frame. 
// It also displays the raw annotation data for the current frame.

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnnotationType } from '../types/types';
import { DEFAULT_ANNOTATION_STYLE } from '../utils/constants';
import { isNestedAnnotation } from '../utils/isNestedAnnotation';
import { computeAnnotationStyle } from '../utils/computeAnnotationStyle';

interface VideoPlayerProps {
  videoSource: string;
  annotations: AnnotationType[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSource, annotations }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [annotationStyle, setAnnotationStyle] = useState<React.CSSProperties>(DEFAULT_ANNOTATION_STYLE);
  const [currentAnnotation, setCurrentAnnotation] = useState<AnnotationType>([]);

   // Event handler for the video's "timeupdate" event.
   const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Calculate the frame rate based on video duration and total annotations
    const frameRate = annotations.length / (video.duration || 1);
    // Determine the current frame we are on
    const currentFrame = Math.floor(video.currentTime * frameRate);
    // Fetch the annotation data for the current frame
    const annotationEntry = annotations[currentFrame];

    if (annotationEntry && annotationEntry.length > 0) {
        const entry = annotationEntry[0];
        // Check if the entry is valid, then compute and set the annotation style
        if (isNestedAnnotation(entry)) {
          const [left, top, width, height] = entry;
          setAnnotationStyle(computeAnnotationStyle(left, top, width, height, video.offsetWidth, video.offsetHeight));
          setCurrentAnnotation(annotationEntry);
        }
    }
  }, [annotations]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Attach the handleTimeUpdate function to the "timeupdate" event of the video
    video.addEventListener('timeupdate', handleTimeUpdate);
    // Cleanup function to detach the event listener when component is unmounted
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [handleTimeUpdate]);

  return (
    <div className='flex flex-col md:w-4/5 md:pr-4'>
      <div className="video-container">
        <video controls ref={videoRef}>
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="annotations-container">
          <div className="annotation" style={annotationStyle}></div>
        </div>
      </div>
      <div className="current-annotation my-4">
        <h3 className="text-lg font-semibold mb-2">Current Frame Annotation Data:</h3>
        <div className="inline-block border rounded-md px-4 py-2 bg-gray-200">
          {currentAnnotation.length > 0 
            ? JSON.stringify(currentAnnotation)
            : ("No data")
          }
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
