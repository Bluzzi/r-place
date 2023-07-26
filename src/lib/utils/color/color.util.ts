import type { HexColor } from "./color.type";

export const isHexColor = (value: string): value is HexColor => (/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i).test(value);