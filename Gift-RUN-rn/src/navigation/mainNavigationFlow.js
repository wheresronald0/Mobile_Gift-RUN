import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RunListScreen from "../screens/RunListScreen";
import RunDetailsScreen from "../screens/RunDetailsScreen";
import LogRunScreen from "../screens/LogRunScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={RunListScreen} />
    <Screen name="RunDetails" component={RunDetailsScreen} />
    <Screen name="LogRun" component={LogRunScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
