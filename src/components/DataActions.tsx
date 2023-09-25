// Component for the action buttons to toggle and download JSON data.

import React, { useCallback } from 'react';
import { AnnotationType } from '../types/types';

interface DataActionsProps {
    annotations: AnnotationType[];
    toggleJSONDisplay: () => void;
}

const DataActions: React.FC<DataActionsProps> = ({ annotations, toggleJSONDisplay }) => {
    const handleDownload = useCallback(() => {
        const blob = new Blob([JSON.stringify(annotations)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "annotations.json";
        a.click();
        URL.revokeObjectURL(url);
    }, [annotations]);

    return (
        <div className="my-4">
            <button 
                onClick={toggleJSONDisplay} 
                className="px-4 py-2 mr-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
                Toggle JSON
            </button>
            <button 
                onClick={handleDownload}
                className="px-4 py-2 border rounded-md bg-green-500 text-white hover:bg-green-600"
            >
                Download JSON
            </button>
        </div>
    );
}

export default DataActions;
