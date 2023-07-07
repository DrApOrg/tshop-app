import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../types/Product";

export const useProductViewModel = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch("http://192.168.1.4:4504/v1/api/product");
        const data = await response.json();

        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const onPressProductItem = (product: Product) => {
    navigation.navigate("DetailCategory" as never, { product } as never);
  };

  return {
    products,
    onPressProductItem,
  };
};
