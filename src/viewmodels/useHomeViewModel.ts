import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// types
import { Category } from "../types/Category";

export const useHomeViewModel = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch("http://192.168.1.4:4504/v1/api/category");
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const onPressCategorieItem = (category: Category) => {
    navigation.navigate("DetailCategory" as never, { category } as never);
  };

  return {
    categories,
    onPressCategorieItem,
  };
};
