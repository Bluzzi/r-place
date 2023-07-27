import type { GameProviderProps, GameHookOutput } from "./game.type";
import type { Component } from "#/lib/utils/component";
import { createContext } from "react";
import { useGame } from "./game.hook";

export const GameContext = createContext<GameHookOutput | null>(null);

export const GameProvider: Component<GameProviderProps> = ({ children, url }) => {
  const value = useGame(url);

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};