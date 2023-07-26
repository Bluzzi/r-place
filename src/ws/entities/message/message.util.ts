import type { Message } from "./message.type";

export const messageHistory: Message[] = [];

export const addMessageToHistory = (message: Message): void => {
  if (messageHistory.length > 9) messageHistory.shift();
  messageHistory.push(message);
};