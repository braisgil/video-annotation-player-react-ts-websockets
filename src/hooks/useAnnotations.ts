// Custom hook to fetch and manage annotation data.

import { useState, useEffect } from 'react';
import { AnnotationType } from '../types/types';
import { ANNOTATION_URL } from '../utils/constants';

const useAnnotations = () => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([]);

  useEffect(() => {
    async function fetchAnnotations() {
      try {
        const response = await fetch(ANNOTATION_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch annotations.');
        }
        const data: AnnotationType[] = await response.json();
        setAnnotations(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAnnotations();
  }, []);

  return annotations;
};

export default useAnnotations;
