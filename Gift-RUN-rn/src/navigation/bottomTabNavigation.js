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
import BadgesScreen from "../screens/BadgesScreen";

const Tab = createBottomTabNavigator();

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
    style={styles.container}
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
  <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen
      name="ListFlow"
      options={{ headerShown: false }}
      component={RunListNavigator}
    />
    <Tab.Screen name="Badges" component={BadgesScreen} />
    <Tab.Screen name="LogRun" component={TopNavigator} />
    <Tab.Screen name="Charities" component={CharitiesScreen} />
    <Tab.Screen name="UserSettings" component={UserSettingsScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 6,
  },
});

export const BottomBarNavigator = () => <TabNavigator />;

/*

 */
