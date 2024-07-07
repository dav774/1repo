export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  status?: "Option1" | null;
  recipient: string | null;
};
