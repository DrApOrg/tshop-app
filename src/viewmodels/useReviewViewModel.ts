import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Review } from "../types/Review";

export const useReviewViewModel = (_id: string) => {
  const navigation = useNavigation();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch("http://192.168.1.4:4504/v1/api/review/");
        const data = await response.json();

        const filteredReviews = data.data.filter(
          (review: Review) => review.productId === _id
        );

        setReviews(filteredReviews);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return {
    reviews,
  };
};
