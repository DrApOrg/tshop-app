export interface Product {
  _id?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  category?: string;
  subcategory?: string;
  size?: number;
  color?: string;
  stock?: number;
  supplier?: string;
  comments?: Comment[];
  ratings?: Rating[];
  createdAt?: string;
  updatedAt?: string;
}

interface Comment {
  user: string;
  content: string;
  date: Date;
}

interface Rating {
  user: string;
  value: number;
}
