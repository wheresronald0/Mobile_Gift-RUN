import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

import { TopNavigator } from "./topTabNavigation";
import { RunListNavigator } from "./mainNavigationFlow";
import CharitiesScreen from "../screens/CharitiesScreen";
import UserSettingsScreen from "../screens/UserSettingsScreen";
import BadgesScreen from "../screens/BadgesScreen";
import AutoLogRunScreen from "../screens/AutoLogRunScreen";

const { Navigator, Screen, Group } = createBottomTabNavigator();

//Icons
const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
const SettingsIcon = (props) => <Icon {...props} name="settings-2-outline" />;
const AddIcon = (props) => <Icon {...props} name="radio-button-on-outline" />;
const SheildIcon = (props) => <Icon {...props} name="shield-outline" />;
const HeartIcon = (props) => <Icon {...props} name="heart-outline" />;

//UI Kitten Styling
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={PersonIcon} title="Your Runs" />
    <BottomNavigationTab icon={SheildIcon} title="Badges" />
    <BottomNavigationTab icon={AddIcon} title="Log a Run" />
    <BottomNavigationTab icon={HeartIcon} title="Charities" />
    <BottomNavigationTab icon={SettingsIcon} title="Setings" />
  </BottomNavigation>
);

//RNav Bottom Bar
const TabNavigator = () => (
  <Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Screen name="ListFlow" component={RunListNavigator} />
    <Screen name="Badges" component={BadgesScreen} />
    <Screen name="LogRun" component={TopNavigator} />
    <Screen name="Charities" component={CharitiesScreen} />
    <Screen name="UserSettings" component={UserSettingsScreen} />
    <Screen name="AutoLogRun" component={AutoLogRunScreen} />
  </Navigator>
);

export const BottomBarNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

/*

 */
