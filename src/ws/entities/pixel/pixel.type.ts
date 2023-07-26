import type { HexColor } from "#/lib/utils/color";

export type Pixel = {
  x: number;
  y: number;

  color: HexColor;

  creatorUsername: string;
  unixTimestamp: number;
}