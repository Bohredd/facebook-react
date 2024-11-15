import { User } from "./User";

export type Friend = {
  id: number;
  since: Date;
  friend: User;
};
