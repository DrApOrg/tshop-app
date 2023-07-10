import { Product } from "./Product";

export interface Review {
  _id?: string;
  productId?: Product;
  userId?: string;
  comment?: string;
  rating?: number;
  createdAt?: Date;
}
