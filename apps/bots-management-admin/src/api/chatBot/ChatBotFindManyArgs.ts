import { ChatBotWhereInput } from "./ChatBotWhereInput";
import { ChatBotOrderByInput } from "./ChatBotOrderByInput";

export type ChatBotFindManyArgs = {
  where?: ChatBotWhereInput;
  orderBy?: Array<ChatBotOrderByInput>;
  skip?: number;
  take?: number;
};
