import React, { useState } from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import "./index.css"
import LiveComments from './components/LiveComments';
import { VIDEO_URL } from './utils/constants';
import { useDataContext } from './contexts/DataLayerContext';
import Header from './components/Header';
import DataActions from './components/DataActions';
import AvailableVideos from './components/AvailableVideos';

function App() {
  // Context Data
  const {annotations, comments, isLoadingComments} = useDataContext()
  // State to hold UI related states
  const [showJSON, setShowJSON] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <AvailableVideos isSidebarOpen={isSidebarOpen} />
        <main className="w-3/4 p-4 main-content">
          <div className='md:flex'>
            <VideoPlayer annotations={annotations} videoSource={VIDEO_URL} />
            <LiveComments comments={comments} isLoadingComments={isLoadingComments}/>
          </div>
          <DataActions 
            annotations={annotations} 
            toggleJSONDisplay={() => setShowJSON(!showJSON)} 
          />
          {showJSON && <pre className="mt-4 p-4 border rounded-md bg-gray-200">{JSON.stringify(annotations, null, 2)}</pre>}
        </main>
      </div>
    </div>
  );
}

export default App;
