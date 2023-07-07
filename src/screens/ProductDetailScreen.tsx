import {
  Text,
  StyleSheet,
  View,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { Button } from "../components";
import Ad from "../components/Ad/Ad";
import ButtonInfo from "../components/ButtonInfo/ButtonInfo";
import ColorsButton from "../components/ColorsButton/ColorsButton";
import { Product } from "../types/Product";

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={require("../assets/product.png")} />
        <View style={styles.containerDetail}>
          <View>
            <Text style={styles.price}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
          <View style={styles.containerColors}>
            <ColorsButton />
            <ColorsButton />
          </View>
          <Button title="Añadir al carrito" icon="filter" />
        </View>
        <Ad />
        <View style={styles.additionalInfo}>
          <ButtonInfo />
          <ButtonInfo />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
  },
  containerDetail: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  image: {
    width: "100%",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#B0B0B0",
  },
  containerColors: {
    flexDirection: "row",
  },

  additionalInfo: {
    backgroundColor: "white",
    width: "100%",
    height: 144,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProductDetailScreen;
