// Custom hook to interact with WebSocket and manage its states.

import { useState, useEffect } from 'react';

const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');

  useEffect(() => {
    const newSocket = new WebSocket(url);

    setSocket(newSocket);

    newSocket.onopen = () => {
      setStatus('connected');
    };

    newSocket.onerror = (error) => {
      setStatus('error');
    };

    newSocket.onmessage = (event) => {
      setMessage(event.data);
    };

    return () => {
      newSocket.close();
    };
  }, [url]);

  return { message, socket, status };
};

export default useWebSocket;
