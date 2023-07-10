import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItemInfo,
  Platform,
} from "react-native";
import { SearchBar } from "../components";
import ReviewItem from "../components/ReviewItem/ReviewItem";
import { useReviewViewModel } from "../viewmodels/useReviewViewModel";
import { Review } from "../types/Review";
import AddReview from "./AddReview";
const ReviewScreen = ({ route }) => {
  const { product } = route.params;
  const { reviews } = useReviewViewModel(product._id);
  console.log(reviews);
  const renderReviewList = (item: Review) => <ReviewItem review={item} />;
  return (
    <View style={styles.container}>
      <AddReview name="nueva review" product={product} />
      <View>
        <SearchBar />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={reviews}
        numColumns={1}
        renderItem={({ item }: ListRenderItemInfo<Review>) =>
          renderReviewList(item)
        }
        keyExtractor={({ _id }) => _id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: Platform.OS === "ios" ? 20 : 20,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    gap: 20,
  },
});

export default ReviewScreen;
