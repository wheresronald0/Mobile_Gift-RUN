import React from "react";
import { StyleSheet } from "react-native";
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
import ProgressScreen from "../screens/ProgressScreen";

const Tab = createBottomTabNavigator();

//Icons
const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
const SettingsIcon = (props) => <Icon {...props} name="settings-2-outline" />;
const AddIcon = (props) => <Icon {...props} name="radio-button-on-outline" />;
const Progress = (props) => <Icon {...props} name="trending-up-outline" />;
const HeartIcon = (props) => <Icon {...props} name="heart-outline" />;

//UI Kitten Styling
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
    style={styles.container}
  >
    <BottomNavigationTab icon={PersonIcon} title="Your Runs" />
    <BottomNavigationTab icon={Progress} title="Progress" />
    <BottomNavigationTab icon={AddIcon} title="Log a Run" />
    <BottomNavigationTab icon={HeartIcon} title="Charities" />
    <BottomNavigationTab icon={SettingsIcon} title="Setings" />
  </BottomNavigation>
);

//RNav Bottom Bar
const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen
      name="ListFlow"
      options={{ headerShown: false }}
      component={RunListNavigator}
    />
    <Tab.Screen
      name="Badges"
      options={{ headerShown: false }}
      component={ProgressScreen}
    />
    <Tab.Screen
      name="LogRun"
      options={{ headerShown: false }}
      component={TopNavigator}
    />
    <Tab.Screen
      name="Charities"
      options={{ headerShown: false }}
      component={CharitiesScreen}
    />
    <Tab.Screen
      name="UserSettings"
      options={{ headerShown: false }}
      component={UserSettingsScreen}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 6,
  },
});

export const BottomBarNavigator = () => <TabNavigator />;
