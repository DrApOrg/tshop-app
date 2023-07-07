import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Product } from "../../types/Product";
import { FunctionComponent } from "react";
interface Props extends Product {
  product: Product;
  onPress: () => void;
}

const ProductItem: FunctionComponent<Props> = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={require("../../assets/img.png")} />
      <Text>
        <Text>{product.name}</Text>
        <Ionicons name="heart" size={24} color="black" />
      </Text>
      <Text>${product.price}</Text>
      <Text>{product.description}</Text>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: "50%",
    padding: 5,
  },
  image: {
    height: 240,
    width: "100%",
    borderRadius: 15,
  },
});
