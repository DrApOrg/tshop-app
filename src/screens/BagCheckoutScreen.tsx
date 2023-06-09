import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Product from "../components/Product/Product";
import CodPromo from "../components/CodPromo/CodPromo";
import Totals from "../components/Totals/Totals";
import { useBagViewModel } from "../viewmodels/useBagController";
const BagCheckoutScreen = () => {
  const { product } = useBagViewModel();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>bag</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={product}
          renderItem={(item) => <Product />}
        />
        <Text style={styles.title}>promocode</Text>
        <CodPromo />
        <Totals />
        <TouchableOpacity style={styles.buttonCheckout}>
          <Text>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BagCheckoutScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 130,
    marginBottom: 20,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    gap: 20,
    justifyContent: "center",
    minHeight: 700,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
  },
  buttonCheckout: {
    backgroundColor: "#B0B0B0",
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
