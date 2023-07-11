import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

interface Props {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<Props> = ({ rating, onRatingChange }) => {
  const renderStar = (index: number) => {
    const filled = index < rating;

    return (
      <TouchableOpacity key={index} onPress={() => onRatingChange(index + 1)}>
        <Image
          style={styles.star}
          source={
            filled
              ? require("../../assets/star-filled.png")
              : require("../../assets/star-outline.png")
          }
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {[0, 1, 2, 3, 4].map((index) => renderStar(index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    width: 30,
    height: 30,
    marginRight: 4,
  },
});

export default StarRating;
