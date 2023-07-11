import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../screens/CategoryScreen";
import { HomeScreen } from "../screens";
import { Category } from "../types/Category";
import SubCategoryScreen from "../screens/SubCategoryScreen";
import { Subcategory } from "../types/category";
import { Product } from "../types/Product";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ReviewScreen from "../screens/ReviewScreen";

type RootStackParamList = {
  Home: undefined;
  DetailCategory: { category: Category };
  DetailSubCategory: { subcategory: Subcategory };
  DetailProducts: { product: Product };
  ReviewScreen: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="DetailCategory" component={CategoryScreen} />
      <Stack.Screen name="DetailSubCategory" component={SubCategoryScreen} />
      <Stack.Screen name="DetailProducts" component={ProductDetailScreen} />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
