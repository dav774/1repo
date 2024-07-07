import { Bot } from "../bot/Bot";

export type Media = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  typeField?: "Option1" | null;
  bot?: Bot | null;
};
