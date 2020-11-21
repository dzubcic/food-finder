import {User} from "./user.model";

export interface Restaurant {
  createdBy: User;
  id: number;
  name: string;
  image: string;
  address: string;
  contact: string;
  workTime: string;
  category: string;
  description: string;
}
