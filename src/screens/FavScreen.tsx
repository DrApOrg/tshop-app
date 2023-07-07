import { Text, StyleSheet, View, Platform } from "react-native";

const FavScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Fav Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    marginTop: Platform.OS === "ios" ? 70 : 50,
    marginHorizontal: 16,
    backgroundColor: "#fff",
  },
});

export default FavScreen;
