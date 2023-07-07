import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FunctionComponent } from "react";
import { Subcategory } from "../../types/category";

interface Props extends Subcategory {
  onPress: () => void;
}
const SubCategoryItem: FunctionComponent<Props> = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={require("../../assets/testctg.png")}
      />
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SubCategoryItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    marginStart: 20,
    fontSize: 18,
    letterSpacing: 0.4,
  },
});
