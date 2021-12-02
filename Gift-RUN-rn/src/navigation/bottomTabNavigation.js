import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

import { RunListNavigator } from "./mainNavigationFlow";
import LogRunScreen from "../screens/LogRunScreen";
import CharitiesScreen from "../screens/CharitiesScreen";
import UserSettingsScreen from "../screens/UserSettingsScreen";
import BadgesScreen from "../screens/BadgesScreen";

const { Navigator, Screen } = createBottomTabNavigator();

//UI Kitten Styling
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Your Runs" />
    <BottomNavigationTab title="Badges" />
    <BottomNavigationTab title="Log a Run" />
    <BottomNavigationTab title="Charities" />
    <BottomNavigationTab title="Setings" />
  </BottomNavigation>
);

//RNav Bottom Bar
const TabNavigator = () => (
  <Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Screen name="listFlow" component={RunListNavigator} />
    <Screen name="badges" component={BadgesScreen} />
    <Screen name="logRun" component={LogRunScreen} />
    <Screen name="charities" component={CharitiesScreen} />
    <Screen name="userSetting" component={UserSettingsScreen} />
  </Navigator>
);

export const BottomBarNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
