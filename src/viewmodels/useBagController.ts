import { useState } from "react";
// types
import { Product } from "../types/Product";

export const useBagViewModel = () => {
  const [product, setProducts] = useState<Product[]>([
    {
      _id: 1,
      name: "cama",
      description: "Esta comoda es bonita xd",
      price: 150.0,
      count: 5,
      image: "../../assets/img.png",
    },
    {
      id: 2,
      name: "cama",
      description: "Esta comoda es bonita xd",
      price: 150.0,
      count: 5,
      image: "../../assets/img.png",
    },
    {
      id: 3,
      name: "cama",
      description: "Esta comoda es bonita xd",
      price: 150.0,
      count: 5,
      image: "../../assets/img.png",
    },
    {
      id: 4,
      name: "cama",
      description: "Esta comoda es bonita xd",
      price: 150.0,
      count: 5,
      image: "../../assets/img.png",
    },
  ]);

  return {
    product,
  };
};
