import { dayJS } from "#/lib/utils/day-js";
import type { Pixel } from "./pixel.type";

export const mapHeight = 50;
export const mapWidth = 50;

export const pixelMap: Pixel[][] = [];

for (let y = 0; y < mapHeight; y++) {
  const row: Pixel[] = [];

  for (let x = 0; x < mapWidth; x++) {
    row.push({
      x,
      y,
      color: "#000000",
      creatorUsername: "Server",
      unixTimestamp: dayJS().unix()
    });
  }

  pixelMap.push(row);
}