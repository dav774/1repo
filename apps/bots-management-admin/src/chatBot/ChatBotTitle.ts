import { ChatBot as TChatBot } from "../api/chatBot/ChatBot";

export const CHATBOT_TITLE_FIELD = "id";

export const ChatBotTitle = (record: TChatBot): string => {
  return record.id?.toString() || String(record.id);
};
