import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RunListScreen from "../screens/RunListScreen";
import RunDetailsScreen from "../screens/RunDetailsScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="RunList" component={RunListScreen} />
    <Stack.Screen name="RunDetails" component={RunDetailsScreen} />
  </Stack.Navigator>
);

export const RunListNavigator = () => <HomeNavigator />;
