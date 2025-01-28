import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import StateScreen from "./src/screens/StateScreen";
import ModalScreen from "./src/screens/ModalScreen";
import SwipeScreen from "./src/screens/SwipeScreen";
import CardScreen from "./src/screens/CardScreen";
import LoadUsers from "./src/screens/LoadUsers";
import CardScreenv1 from "./src/screens/CardScreenv1";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home | List of Screen'}}
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
        <Stack.Screen
          name="Modal"
          component={ ModalScreen}
          options={{ title: 'Modal Screen'}}
        />
        <Stack.Screen
          name="Swipe"
          component={ SwipeScreen}
          options={{ title: 'Swipe'}}
        />
        <Stack.Screen
          name="Cardv1"
          component={ CardScreenv1}
          options={{ title: 'Card v1'}}
        />
        <Stack.Screen
          name="Card"
          component={ CardScreen}
          options={{ title: 'Card 🚀'}}
        />

        <Stack.Screen
          name="LoadUsers"
          component={ LoadUsers}
          options={{ title: 'Users 👻'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;