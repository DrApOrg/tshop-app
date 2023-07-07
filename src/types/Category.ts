export interface Category {
  _id?: number;
  name?: string;
  description?: string;
  image?: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  _id?: string;
  name?: string;
  description?: string;
  image?: string;
}
