import { User } from "./User";
import { Post } from "./Post";

export type Like = {
  id: number;
  reaction: string;
  date: string;
  likeBy: User;
  post: Post;
};
