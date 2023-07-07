import {
  View,
  StyleSheet,
  Platform,
  Text,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { SearchBar } from "../components";
import SubCategoryItem from "../components/SubCategoryItem/SubCategoryItem";
import { Subcategory } from "../types/category";
import { useCategoryViewModel } from "../viewmodels/useCategoryViewModel";

const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  const { subCategories, onPressSubCategorieItem } =
    useCategoryViewModel(category);
  const renderCategoryList = (item: Subcategory) => (
    <SubCategoryItem
      name={item.name}
      onPress={() => onPressSubCategorieItem(item)}
    />
  );
  return (
    <View style={styles.container}>
      <View>
        <SearchBar />
      </View>
      <View>
        <Text style={styles.containerTitle}>categories1</Text>
        <View style={styles.categoriesList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={subCategories}
            renderItem={({ item }: ListRenderItemInfo<Subcategory>) =>
              renderCategoryList(item)
            }
            keyExtractor={({ _id }) => _id.toString()}
          />
        </View>
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
