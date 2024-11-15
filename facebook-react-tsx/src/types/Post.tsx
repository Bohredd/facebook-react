import { User } from "./User";

export type Post = {
  id: number;
  text: string;
  date: string;
  postBy?: User;
};
