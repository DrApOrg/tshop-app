import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../types/Product";
import { Subcategory } from "../types/category";

export const useSubcategoryViewModel = (subcategory: Subcategory) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch("http://192.168.1.4:4504/v1/api/product");
        const data = await response.json();

        const filteredProducts = data.data.filter(
          (product: Product) => product.subcategory === subcategory.name
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [subcategory]);

  const onPressProductItem = (product: Product) => {
    navigation.navigate("DetailProducts" as never, { product } as never);
  };

  return {
    products,
    onPressProductItem,
  };
};
