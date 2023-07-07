import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Subcategory } from "../types/category";
import { Category } from "../types/Category";

export const useCategoryViewModel = (category: Category) => {
  const navigation = useNavigation();
  const [subCategories, setSubCategories] = useState<Subcategory[]>([]);

  useEffect(() => {
    const fetchSubCategories = async (): Promise<void> => {
      try {
        const response = await fetch("http://192.168.1.4:4504/v1/api/category");
        const data = await response.json();
        const selectedCategory = data.data.find(
          (c: Category) => c.name === category.name
        );
        if (selectedCategory) {
          setSubCategories(selectedCategory.subcategories);
        }
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchSubCategories();
  }, [category]);

  const onPressSubCategorieItem = (subcategory: Subcategory) => {
    navigation.navigate("DetailSubCategory" as never, { subcategory } as never);
  };

  return {
    subCategories,
    onPressSubCategorieItem,
  };
};
