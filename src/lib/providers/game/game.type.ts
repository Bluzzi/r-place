import type { Message } from "#/ws/entities/message";
import type { Pixel } from "#/ws/entities/pixel";
import type { ClientToServerEvents, ServerToClientEvents } from "#/ws/typing";
import type { PropsWithChildren } from "react";
import type { Socket as SocketIO } from "socket.io-client";

export type Socket = SocketIO<ServerToClientEvents, ClientToServerEvents>;

export type GameProviderProps = PropsWithChildren & {
  url: string;
}

export type GameHookOutput = {
  socket: Socket;

  isLogin: boolean;

  messageHistory: Message[];
  pixelMap: Pixel[][];
}