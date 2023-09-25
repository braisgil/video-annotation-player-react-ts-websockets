// Component to display live comments in real-time.

import React from 'react';
import { Comment } from '../types/types';

interface LiveCommentsProps {
  comments?: Comment[]; 
  isLoadingComments?: boolean;
}

const LiveComments: React.FC<LiveCommentsProps> = ({comments, isLoadingComments = false}) => {
  return (
    <div className="mt-4 md:w-1/5">
      <h3 className="text-lg font-semibold mb-2">Live Comments</h3>
      <ul className="border rounded-md p-4 bg-gray-200 overflow-y-auto" style={{ maxHeight: "500px" }}>
        {isLoadingComments && (
          <li className="text-center text-gray-500">Loading comments...</li>
        )}
        {!isLoadingComments && comments && comments.length === 0 && (
          <li className="text-center text-gray-500">No comments available.</li>
        )}
        {comments && comments.map((comment, index) => (
          <li key={index} className="mb-4 last:mb-0">
            <img src={comment.picture} alt={comment.name} className="w-10 h-10 rounded-full mr-2 inline-block" />
            <strong>{comment.name}:</strong> {comment.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveComments;
