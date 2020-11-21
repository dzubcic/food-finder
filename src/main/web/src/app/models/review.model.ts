import {User} from "./user.model";

export interface Review {
  id: number;
  review: string;
  createdAt: string;
  createdBy: User;
}
