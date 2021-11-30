import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "./src/screens/IndexScreen";
import CharitiesScreen from "./src/screens/CharitiesScreen";
import LogRunScreen from "./src/screens/LogRunScreen";
import RunDetailsScreen from "./src/screens/RunDetailsScreen";
import RunListScreen from "./src/screens/RunListScreen";
import UserSettingsScreen from "./src/screens/UserSettingsScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="Charities" component={CharitiesScreen} />
        <Stack.Screen name="Log a Run" component={LogRunScreen} />
        <Stack.Screen name="List of Runs" component={RunListScreen} />
        <Stack.Screen name="Detials of Run" component={RunDetailsScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="User Settings" component={UserSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
