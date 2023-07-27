"use client";

import { Input } from "#/lib/components/input";
import { useSocketContext } from "#/lib/providers/socket";
import type { Component } from "#/lib/utils/component";
import { useEffect } from "react";

const Home: Component = () => {
  const socket = useSocketContext();

  useEffect(() => {
    socket.emit("login", "Bluzzi");

    socket.on("login", (success, messageHistory, pixelMap) => {
      console.log(success, messageHistory, pixelMap);
    });
  }, [socket]);

  return (
    <main className="h-screen mx-auto w-96 flex items-center justify-center">
      <Input />
    </main>
  );
};

export default Home;