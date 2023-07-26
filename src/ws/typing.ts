import type { HexColor } from "#/lib/utils/color";
import type { Message } from "./entities/message";
import type { Pixel } from "./entities/pixel";

export type Cooldown = number | "free";

export type ServerToClientEvents = {
  "connect": (success: boolean, messageHistory?: Message[], pixelMap?: Pixel[][]) => void;

  "message:received": (username: string, unixTimestamp: number, content: string) => void;

  "game:cooldown": (cooldown: Cooldown) => void;
  "game:pixel-update": (x: number, y: number, hexColor: HexColor, creatorUsername: string, unixTimestamp: number) => void;
}

export type ClientToServerEvents = {
  "connect": (username: string) => void;

  "message:send": (message: string) => void;

  "game:set-pixel": (x: number, y: number, hexColor: HexColor) => void;
}

export type InterServerEvents = {
  ping: () => void;
}