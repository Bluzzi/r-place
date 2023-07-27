import type { GameHookOutput } from "./game.type";
import type { ServerToClientEvents } from "#/ws/typing";
import type { Message } from "#/ws/entities/message";
import type { Pixel } from "#/ws/entities/pixel";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";
import { GameContext } from "./game.context";

export const useGame = (url: string): GameHookOutput => {
  // Hooks:
  const router = useRouter();

  // Socket instance:
  const socket = io(url);

  // States:
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  const [pixelMap, setPixelMap] = useState<Pixel[][]>([]);

  // Functions:
  const handleLogin: ServerToClientEvents["login"] = (success, messageHistory, pixelMap) => {
    if (!success || !messageHistory || !pixelMap) return;

    setIsLogin(true);
    setMessageHistory(messageHistory);
    setPixelMap(pixelMap);
    router.push("/game");
  };

  // Life cycle:
  useEffect(() => {
    socket.on("login", handleLogin);
    socket.on("message:received", () => null);
    socket.on("game:cooldown", () => null);
    socket.on("game:pixel-update", () => null);

    return () => {
      socket.off("login", handleLogin);
    };
  });

  // Return:
  return {
    socket,

    isLogin,

    messageHistory,
    pixelMap
  };
};

export const useGameContext = (): GameHookOutput => {
  const context = useContext(GameContext);

  if (!context) throw Error("useGameContext must be used in GameProvider");

  return context;
};