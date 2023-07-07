import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../Button/Button";

const Ad = () => {
  return (
    <View style={styles.containerAd}>
      <View style={styles.ad}>
        <Text style={styles.sale}>%</Text>
        <View>
          <Text style={styles.title}>Discount for you</Text>
          <Text style={styles.description}>Use promocode ULMO</Text>
        </View>
        <View style={styles.copy}>
          <Button title="Copy" height={40} />
        </View>
      </View>
    </View>
  );
};

export default Ad;

const styles = StyleSheet.create({
  containerAd: {
    backgroundColor: "white",
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  ad: {
    backgroundColor: "#F5F5F5",
    width: "90%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sale: {
    width: "10%",
    textAlign: "center",
    marginStart: 15,
    fontSize: 34,
    fontWeight: "900",
  },
  copy: {
    marginHorizontal: 15,
    width: "20%",
    height: 38,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
  },
  description: {
    color: "#9E9E9E",
    fontSize: 14,
    fontWeight: "400",
  },
});
