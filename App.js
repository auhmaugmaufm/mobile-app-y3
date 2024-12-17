import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import StateScreen from "./src/screens/StateScreen";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="State">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Component"
          component={ComponentScreen}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
        />
        <Stack.Screen
          name="State"
          component={StateScreen}
          options={{ title: 'Learning UseState'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App