export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  sender: string | null;
  recipient: string | null;
  timestamp: Date | null;
};
