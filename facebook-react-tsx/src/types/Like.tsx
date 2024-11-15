import { User } from "./User";
import { Post } from "./Post";
import { Reaction } from "./Reaction";

export type Like = {
  id: number;
  reaction: Reaction;
  date: string;
  likeBy: User;
  post: Post;
};
