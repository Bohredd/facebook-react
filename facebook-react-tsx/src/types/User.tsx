import { Friend } from "./Friend";

export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  friends?: Friend[];
};
