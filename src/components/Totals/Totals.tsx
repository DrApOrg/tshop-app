import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Totals = () => {
  return (
    <View style={styles.containerTotals}>
      <View>
        <Text style={styles.title}>Total</Text>
        <Text style={styles.textPromo}>Promocode</Text>
      </View>
      <View>
        <Text style={styles.title}>$400.50</Text>
        <Text style={[styles.textPromo, { alignSelf: "flex-end" }]}>
          -$25.00
        </Text>
      </View>
    </View>
  );
};

export default Totals;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "600",
  },
  containerTotals: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPromo: {
    color: "#B0B0B0",
    fontSize: 16,
  },
});
