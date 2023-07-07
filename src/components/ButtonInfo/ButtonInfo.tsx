import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonInfo = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Reviews</Text>
      <Text style={styles.title}>32</Text>
    </TouchableOpacity>
  );
};

export default ButtonInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: 64,
  },
  title: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});
