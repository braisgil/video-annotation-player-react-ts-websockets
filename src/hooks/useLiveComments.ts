// Custom hook to fetch and manage live comments using WebSocket.

import { useState, useEffect } from 'react';
import { Comment } from '../types/types';
import useWebSocket from './useWebSocket';

const useLiveComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const { message, status } = useWebSocket('ws://3.8.225.25:8080');
   // Comments are loading when the status is "connecting"
  const isLoadingComments = status === 'connecting'; 

  useEffect(() => {
    if (message) {
      const comment: Comment = JSON.parse(message);
      setComments(prevComments => [comment, ...prevComments]);
    }
  }, [message]);

  return { comments, isLoadingComments };
};

export default useLiveComments;
