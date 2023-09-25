// Component to display the list of available videos in the sidebar.

import React from 'react';
import { videoSuggestionMock } from '../utils/constants';

interface AvailableVideosProps {
  isSidebarOpen: boolean;
}

const AvailableVideos: React.FC<AvailableVideosProps> = ({ isSidebarOpen }) => {
  const displayClass = isSidebarOpen ? 'is-sidebar-open' : '';
  return (
    <aside className={`bg-gray-200 p-4 w-full overflow-y-auto ${displayClass} md:block md:w-1/4`} style={{ maxHeight: 'calc(100vh - 56px)' }}>
      <h2 className="text-lg font-semibold mb-4">Available Videos</h2>
      <ul className="space-y-4">
        {videoSuggestionMock.map((video, idx) => (
          <li key={idx} className="flex space-x-2 items-start">
            <div className="thumbnail-container">
              <img src={video.thumbnail} alt={`${video.title} thumbnail`} className="thumbnail-image" />
            </div>
            <div className="flex-1">
              <a href="#" className="text-blue-500 hover:underline mb-1 block">{video.title}</a>
              <p className="text-sm text-gray-500">{video.desc}</p>
            </div>
            <span className="text-sm text-gray-600">{video.duration}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AvailableVideos;
