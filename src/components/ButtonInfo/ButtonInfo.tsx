import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../../types/Product";

interface Props {
  title: string;
  detail: number;
  product: Product;
}

const ButtonInfo: React.FC<Props> = ({ title, detail, product }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ReviewScreen" as never, { product } as never); // Reemplaza "ReviewScreen" con el nombre de tu componente ReviewScreen en la navegación
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{detail}</Text>
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
  detail: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});
