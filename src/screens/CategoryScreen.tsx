import { View, StyleSheet, Platform, Text } from "react-native";
import { SearchBar } from "../components";

const CategoryScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View>
        <SearchBar />
      </View>
      <View>
        <Text style={styles.containerTitle}>categories</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: Platform.OS === "ios" ? 20 : 20,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    gap: 20,
  },
  containerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1.2,
    lineHeight: 30,
  },
  actions: {},
  categoriesList: {
    marginBottom: 20,
  },
  historyList: {},
});

export default CategoryScreen;
