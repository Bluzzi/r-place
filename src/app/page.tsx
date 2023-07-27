"use client";

import type { Component } from "#/lib/utils/component";
import type { FormEvent } from "react";
import { Button } from "#/lib/components/button";
import { Input } from "#/lib/components/input";
import { useToast } from "#/lib/components/use-toast";
import { useGameContext } from "#/lib/providers/game";
import { useState } from "react";

const Home: Component = () => {
  // Hooks:
  const { socket } = useGameContext();
  const { toast } = useToast();

  // States:
  const [username, setUsername] = useState<string>("");

  // Functions:
  const handleSubmit = (event?: FormEvent<HTMLFormElement>): void => {
    event?.preventDefault();

    if (!username) {
      toast({
        title: "Invalid username!",
        description: "Your username must be at least 1 character long."
      });
      return;
    }

    socket.emit("login", username);
    toast({
      title: "Successful login!",
      description: "You will be redirected to the game board!"
    });
  };

  // Render:
  return (
    <form className="h-screen mx-auto w-96 flex items-center justify-center flex-col text-2xl gap-5" onSubmit={handleSubmit}>
      <p>Choose your username</p>
      <Input value={username} onChange={e => setUsername(e.target.value)} placeholder="Squeezie" />
      <Button className="w-full" onClick={() => handleSubmit()}>Join the place</Button>
    </form>
  );
};

export default Home;