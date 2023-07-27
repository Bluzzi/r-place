import type { ClientToServerEvents, ServerToClientEvents } from "#/ws/typing";
import type { PropsWithChildren } from "react";
import type { Socket as SocketIO } from "socket.io-client";

export type Socket = SocketIO<ServerToClientEvents, ClientToServerEvents>;

export type SocketProviderProps = PropsWithChildren & {
  url: string;
}