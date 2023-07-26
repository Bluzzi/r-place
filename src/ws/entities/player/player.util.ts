import type { Socket } from "socket.io";
import type { Player } from "./player.type";

const players: Player[] = [];

export const isOnline = (username: string): boolean => {
  return Boolean(players.find(player => player.username.toLowerCase() === username.toLowerCase()));
};

export const createConnection = (data: Player): void => {
  players.push(data);
};

export const getPlayer = (socket: Socket): Player | null => {
  return players.find(player => player.socket.id === socket.id) || null;
};

export const broadcast = (callback: (player: Player) => void): void => {
  for (const player of players) callback(player);
};