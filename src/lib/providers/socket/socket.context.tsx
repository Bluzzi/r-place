import type { Socket, SocketProviderProps } from "./socket.type";
import type { Component } from "#/lib/utils/component";
import { createContext } from "react";
import { useSocket } from "./socket.hook";

export const SocketContext = createContext<Socket | null>(null);

export const SocketProvider: Component<SocketProviderProps> = ({ children, url }) => {
  const value = useSocket(url);

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};