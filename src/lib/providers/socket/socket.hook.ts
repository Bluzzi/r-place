import { useContext } from "react";
import type { Socket } from "./socket.type";
import { io } from "socket.io-client";
import { SocketContext } from "./socket.context";

export const useSocket = (url: string): Socket => {
  const socket = io(url);

  return socket;
};

export const useSocketContext = (): Socket => {
  const context = useContext(SocketContext);

  if (!context) throw Error("useSocketContext must be used in SocketProvider");

  return context;
};