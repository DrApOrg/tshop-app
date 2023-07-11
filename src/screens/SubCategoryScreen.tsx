import {
  StyleSheet,
  View,
  Platform,
  FlatList,
  ListRenderItemInfo,
  Image,
} from "react-native";
import React from "react";
import { Button, SearchBar } from "../components";
import ProductItem from "../components/ProductItem/ProductItem";
import { Product } from "../types/Product";
import { useSubcategoryViewModel } from "../viewmodels/useSubcategoryViewModel";

const SubCategoryScreen = ({ route }) => {
  const { subcategory } = route.params;
  console.log(route);

  const { products, onPressProductItem } = useSubcategoryViewModel(subcategory);
  const renderCategoryList = (item: Product) => (
    <ProductItem product={item} onPress={() => onPressProductItem(item)} />
  );

  return (
    <View style={styles.container}>
      <View>
        <SearchBar />
      </View>

      <View style={styles.containerButton}>
        <Button title="Ordenar" icon="swap-vertical" color="#F5F5F5" />
        <Button title="Filtrar" icon="filter" color="#F5F5F5" />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        numColumns={2}
        renderItem={({ item }: ListRenderItemInfo<Product>) =>
          renderCategoryList(item)
        }
        keyExtractor={({ _id }) => _id.toString()}
      />
    </View>
  );
};

export default SubCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: Platform.OS === "ios" ? 20 : 20,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    gap: 20,
  },
  containerButton: {
    flexDirection: "row",
    width: "100%",
  },
  containerProduct: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
