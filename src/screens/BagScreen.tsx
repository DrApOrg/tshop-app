import { View, Text, StyleSheet, Platform, Image } from "react-native";
import { Button } from "../components";

const BagScreen = () => {
  return (
    <View style={styles.container}>
      <Text>bag</Text>
      <Image source={require("../assets/bag-user.png")} />
      <Text>your bag is empty</Text>
      <Text>
        items remain in you bag for 1 hour, and then they're to your Saved items
      </Text>
      <Button title="Start shopping" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 130 : 110,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BagScreen;
