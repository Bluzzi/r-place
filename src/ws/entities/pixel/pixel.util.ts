import type { HexColor } from "#/lib/utils/color";
import { dayJS } from "#/lib/utils/day-js";
import type { Pixel } from "./pixel.type";
import { pixelMap, mapHeight, mapWidth } from "./pixel.map";
import { broadcast } from "../player";

export const updatePixel = (x: number, y: number, color: HexColor, username: string): void => {
  if (x < 0 || x >= mapWidth || y < 0 || y >= mapHeight) return;

  const pixel: Pixel = {
    x,
    y,
    color,
    creatorUsername: username,
    unixTimestamp: dayJS().unix()
  };

  pixelMap[y][x] = pixel;
  broadcast(player => player.socket.emit(
    "game:pixel-update",
    pixel["x"],
    pixel["y"],
    pixel["color"],
    pixel["creatorUsername"],
    pixel["unixTimestamp"],
  ));
};

export const getPixel = (x: number, y: number): Pixel | null => {
  if (x < 0 || x >= mapWidth || y < 0 || y >= mapHeight) return null;

  return pixelMap[y][x];
};