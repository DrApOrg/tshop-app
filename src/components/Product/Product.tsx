import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Product = () => {
  return (
    <View style={styles.product}>
      <View style={styles.containerImage}>
        <Image style={styles.img} source={require("../../assets/img.png")} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.price}>$150.00</Text>
        <Text style={styles.description}>
          Wooden bedside table featuring a raised design
        </Text>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.buttonMin}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCount}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMax}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerClose}>
        <Image
          style={styles.close}
          source={require("../../assets/shape.png")}
        />
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  product: {
    margin: 5,
    flexDirection: "row",
  },
  price: {
    fontSize: 16,
  },
  description: {
    fontSize: 12,
    color: "#B0B0B0",
  },
  img: {
    height: 115,
    width: 94,
    borderRadius: 8,
  },
  containerImage: {
    flex: 0.3,
  },
  containerText: {
    justifyContent: 'space-between',
    flex: 0.65,
  },
  containerClose: {
    flex: 0.05,
  },
  close: {
    height: 20,
    width: 20,
  },
  containerButtons: {
    flexDirection: "row",
    marginTop: 10,
    width: 99,
    height: 36,
  },
  buttonMin: {
    width: 33,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    borderBottomStartRadius: 5,
    borderTopStartRadius: 5,
  },
  buttonCount: {
    width: 33,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  buttonMax: {
    width: 33,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    borderBottomEndRadius: 5,
    borderTopEndRadius: 5,
  },
});
