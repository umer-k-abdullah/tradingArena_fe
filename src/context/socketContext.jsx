import React, { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

// Define the context
const SocketContext = createContext(null);

// Socket server URL
const SOCKET_URL = "http://localhost:3304";

// Socket provider component
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize the socket connection
    const socketInstance = io(SOCKET_URL, {
      transports: ["websocket"],
      withCredentials: true,
    });

    setSocket(socketInstance);

    // Authenticate the user when socket is connected
    const authenticateUser = async () => {
      const token = localStorage.getItem("token"); 
      if (token) {
        socketInstance.emit("authenticate", token);
      }
    };

    authenticateUser();

    // Cleanup on unmount
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom hook to use the socket context
export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === null) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};
