import { Media } from "../media/Media";
import { User } from "../user/User";

export type Bot = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  platform?: "Option1" | null;
  name: string | null;
  mediaItems?: Array<Media>;
  user?: User | null;
};
