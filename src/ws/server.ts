import type { ClientToServerEvents, InterServerEvents, ServerToClientEvents } from "./typing";
import { Server } from "socket.io";
import { broadcast, createConnection, getPlayer, isOnline } from "./entities/player";
import { dayJS } from "#/lib/utils/day-js";
import { addMessageToHistory, messageHistory } from "./entities/message";
import { isHexColor } from "#/lib/utils/color";
import { updatePixel } from "./entities/pixel";
import { pixelMap } from "./entities/pixel/pixel.map";
import { createServer } from "http";

const httpServer = createServer();
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents>(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

const defaultCooldown = 5;

io.on("connection", (socket) => {
  socket.on("login", (username) => {
    if (isOnline(username)) {
      socket.emit("login", false);
      return;
    }

    createConnection({ socket, username, cooldown: defaultCooldown });
    socket.emit("login", true, messageHistory, pixelMap);
  });

  socket.on("message:send", (message) => {
    if (message.length > 1000) return;

    const from = getPlayer(socket)?.username;
    const unixTimestamp = dayJS().unix();

    if (!from) return;

    broadcast(player => player.socket.emit("message:received", from, unixTimestamp, message));
    addMessageToHistory({
      username: from,
      unixTimestamp: unixTimestamp,
      content: message
    });
  });

  socket.on("game:set-pixel", (x, y, hexColor) => {
    const player = getPlayer(socket);

    if (!player) return;
    if (!isHexColor(hexColor)) return;

    updatePixel(x, y, hexColor, player.username);
  });

  socket.on("disconnect", () => {
    // TODO
  });
});

setInterval(() => broadcast(player => {
  if (player.cooldown === 1) player.cooldown = "free";
  if (player.cooldown !== "free") player.cooldown -= 1;

  player.socket.emit("game:cooldown", player.cooldown);
}), 1000);

io.listen(4000);