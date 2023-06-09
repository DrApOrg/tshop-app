import { StyleSheet, Image, View, TextInput } from "react-native";
import React from "react";

const CodPromo = () => {
  return (
    <View style={styles.containerPromo}>
      <TextInput style={styles.inputPromo} value="ULMO"></TextInput>
      <Image style={styles.close} source={require("../../assets/shape.png")} />
    </View>
  );
};

export default CodPromo;

const styles = StyleSheet.create({
  containerPromo: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 64,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingEnd: 10,
    paddingStart: 10,
  },
  inputPromo: {
    width: 271,
    flex: 0.9,
  },
  close: {
    height: 20,
    width: 20,
  },
});
