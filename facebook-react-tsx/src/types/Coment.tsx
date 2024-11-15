import { User } from "./User";
import { Post } from "./Post";

export type Coment = {
  id: number;
  text: string;
  date: string;
  commentBy: User;
  post: Post;
};
