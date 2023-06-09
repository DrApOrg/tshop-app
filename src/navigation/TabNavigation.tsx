import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens } from "../types/Navigation";
import HomeStack from "./StackNavigation";
import BagScreen from "../screens/BagScreen";
import { Feather } from "@expo/vector-icons";
import { HomeScreen } from "../screens";
import { Color } from "../utils/Colors";
import FavScreen from "../screens/FavScreen";
import AccountScreen from "../screens/AccountScreen";
import BagCheckoutScreen from "../screens/BagCheckoutScreen";

const Tabs: [name: Screens, iconName: any, component: any][] = [
  [Screens.HOME, "home", HomeStack],
  [Screens.BAG, "shopping-bag", BagCheckoutScreen],
  [Screens.FAVS, "heart", FavScreen],
  [Screens.SETTINGS, "user", AccountScreen],
];

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { display: "none" },
      }}
    >
      {Tabs.map(([name, iconName, component]) => (
        <Tab.Screen
          name={name}
          key={name}
          component={component}
          options={{
            tabBarIcon: ({ size, color, focused }) => (
              <Feather
                name={iconName}
                size={29}
                color={focused ? "black" : Color.grey}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
