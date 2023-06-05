import { 
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import TabNavigation from "./TabNavigation";

export const AppContainer = () => {
  return (
    <NavigationContainer theme={{
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: "#fff"
      } 
    }}>
      <TabNavigation/>
    </NavigationContainer>
  )
}