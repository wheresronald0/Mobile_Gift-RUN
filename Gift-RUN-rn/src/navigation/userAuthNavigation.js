import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator options={{ headerShown: false }}>
    <Stack.Screen name="Sign Up for an Account" component={SignUpScreen} />
    <Stack.Screen
      name="SignIn"
      options={{ headerShown: false }}
      component={SignInScreen}
    />
  </Stack.Navigator>
);

export const UserAuthNavigator = () => <AuthNavigator />;
