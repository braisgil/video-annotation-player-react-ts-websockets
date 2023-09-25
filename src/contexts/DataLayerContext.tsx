import React, { createContext, useContext, ReactNode } from 'react';
import useAnnotations from '../hooks/useAnnotations';
import useLiveComments from '../hooks/useLiveComments';
import { AnnotationType, Comment } from '../types/types';

interface DataProviderProps {
  children: ReactNode;
}

interface DataContextType {
  annotations: AnnotationType[];
  comments: Comment[];
  isLoadingComments: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Context provider to manage and store annotations and live comments data.
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const annotations = useAnnotations();
  const { comments, isLoadingComments } = useLiveComments();

  return (
    <DataContext.Provider value={{ annotations, comments, isLoadingComments }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to easily consume the data context in components.
export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
