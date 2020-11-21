import {User} from "./user.model";

export interface Restaurant {
  createdBy: User;
  createdAt: string;
  id: number;
  name: string;
  image: string;
  address: string;
  contact: string;
  workTime: string;
  category: string;
  description: string;
}

export interface RestaurantDTO {
  id: number;
  name: string;
  image: string;
  address: string;
  category: string;
  createdBy: string;
  description: string;
}
