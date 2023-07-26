import type { Socket } from "socket.io";
import type { ClientToServerEvents, Cooldown, InterServerEvents, ServerToClientEvents } from "#/ws/typing";

export type Player = {
  socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents>;
  username: string;
  cooldown: Cooldown;
}