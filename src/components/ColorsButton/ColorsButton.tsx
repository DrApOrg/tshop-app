import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FunctionComponent, useState } from "react";

interface Props {
  onPress?: () => void;
  color?: string;
}

const ColorsButton: FunctionComponent<Props> = ({ color }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handlePress = () => {
    if (selectedColor === color) {
      setSelectedColor("");
    } else {
      setSelectedColor(color);
    }
  };

  const buttonStyle =
    selectedColor === color
      ? [styles.container, styles.containerSelected]
      : styles.container;
  const titleStyle =
    selectedColor === color ? styles.titleWhite : styles.titleBlack;
  const borderColor = selectedColor === color ? "white" : "#E0E0E0";

  return (
    <TouchableOpacity
      style={[buttonStyle, { borderColor }]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View
        style={[styles.colorCircle, { backgroundColor: color, borderColor }]}
      />
      <Text style={titleStyle}>{color}</Text>
    </TouchableOpacity>
  );
};

export default ColorsButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 102,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 24,
    marginHorizontal: 4,
    borderWidth: 1,
  },
  containerSelected: {
    backgroundColor: "black",
  },
  titleWhite: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    flexDirection: "row",
    alignItems: "center",
  },
  titleBlack: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
    flexDirection: "row",
    alignItems: "center",
  },
  colorCircle: {
    width: 16,
    height: 16,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
  },
});
