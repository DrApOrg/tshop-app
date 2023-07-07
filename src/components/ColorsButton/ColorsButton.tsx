import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ColorsButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.colorCircle, { backgroundColor: "red" }]} />
      <Text style={styles.title}>black</Text>
    </TouchableOpacity>
  );
};

export default ColorsButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: 102,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 24,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 14,
    color: "white",
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
    borderColor: "white",
  },
});
