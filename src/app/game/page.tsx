"use client";

import type { Component } from "#/lib/utils/component";
import { useGameContext } from "#/lib/providers/game";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Sheet } from "#/lib/components/sheet";

const Game: Component = () => {
  const game = useGameContext();
  const router = useRouter();

  useEffect(() => {
    if (!game.isLogin) router.push("/");
  }, [game, router]);

  return (
    <main>
      <section>
        <Sheet>

        </Sheet>
      </section>
    </main>
  );
};

export default Game;