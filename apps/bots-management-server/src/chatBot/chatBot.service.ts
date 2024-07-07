import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatBotServiceBase } from "./base/chatBot.service.base";

@Injectable()
export class ChatBotService extends ChatBotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
