import { StyleSheet, Text, View, Image } from "react-native";
import React, { FunctionComponent } from "react";
import { Review } from "../../types/Review";
import { formatDate } from "../../utils/formatDate";
interface Props {
  review: Review;
}
const ReviewItem: FunctionComponent<Props> = ({ review }) => {
  const renderStars = (rating: number) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <Image
          key={i}
          style={styles.star}
          source={require("../../assets/star-filled.png")}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Image
          key={filledStars}
          style={styles.star}
          source={require("../../assets/star-half.png")}
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Image
          key={filledStars + i + (hasHalfStar ? 1 : 0)}
          style={styles.star}
          source={require("../../assets/star-outline.png")}
        />
      );
    }

    return stars;
  };
  return (
    <View style={styles.containerReview}>
      <View style={styles.rating}>
        <View style={styles.starsContainer}>{renderStars(review.rating)}</View>
        <Text style={styles.date}>
          {formatDate(review.createdAt.toString())}
        </Text>
      </View>
      <View style={styles.userInfo}>
        <Image
          style={styles.userImage}
          source={require("../../assets/product.png")}
        />
        <View>
          <Text style={styles.userName}>{review.userId}</Text>
        </View>
      </View>
      <Text style={styles.comment}>{review.comment}.</Text>
    </View>
  );
};

export default ReviewItem;

const styles = StyleSheet.create({
  containerReview: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  comment: {
    fontSize: 14,
    lineHeight: 20,
  },
});
