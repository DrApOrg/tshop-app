import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Screens } from "../types/Navigation"
import HomeStack from "./HomeStack";
import { Feather } from '@expo/vector-icons';
import { BagCheckoutScreen, HomeScreen } from "../screens"
import { Color } from "../utils/Colors";
import FavScreen from "../screens/FavScreen";
import AccountScreen from "../screens/Account/AccountScreen";
import AccountStack from "./AccountStack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tabs: [
  name: Screens,
  iconName: any,
  component: any
][] = [
  [Screens.HOME,'home', HomeStack],
  [Screens.BAG, 'shopping-bag', BagCheckoutScreen],
  [Screens.FAVS, 'heart', FavScreen],
  [Screens.ACCOUNT, 'user', AccountStack],
]

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const IsShowTabBar = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route)
    const hideOnScreens = ["StepOne", "StepTwo", "StepThree", "StepMain"];
    return hideOnScreens.some(value => value === routeName)
  }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: { display: "none" },
      })}
    >
      {Tabs.map(([name, iconName, component]) => (
        <Tab.Screen
          name={name}
          key={name}
          component={component}
          options={({route})=> ({
            tabBarStyle: {
              display: `${IsShowTabBar(route) ? 'none': 'flex'}`
            },
            tabBarIcon: ({ size, color, focused }) => (
              <Feather
                name={iconName}
                size={29}
                color={focused ? "black" : Color.grey}
              />
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
