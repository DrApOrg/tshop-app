import { RouteProp } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Text } from "react-native"
import CategoryScreen from "../screens/CategoryScreen";
import { HomeScreen } from "../screens";
import { Category } from "../types/Category";

type RootStackParamList = {
  Home: undefined;
  DetailCategory: {category: Category}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const HomeStack = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DetailCategory"
        component={ CategoryScreen }
        options={({route}) => ({
          title: route.params?.category.name
        })}
      />
    </Stack.Navigator>
  )
}

export default HomeStack