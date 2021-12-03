import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  TabBar,
  Tab,
  TopNavigation,
  Layout,
  Text,
  Divider,
} from "@ui-kitten/components";

import ManualLogRunScreen from "../screens/ManualLogRunScreen";
import AutoLogRunScreen from "../screens/AutoLogRunScreen";

const { Navigator, Screen } = createMaterialTopTabNavigator();

//UI Kitten Styling
const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <Tab title="Automatically Log" style={styles.tabContainer} />
    <Tab title="Manually Log" style={styles.tabContainer} />
  </TabBar>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <TopTabBar {...props} />}>
    <Screen name="AutoLog" component={AutoLogRunScreen} />
    <Screen name="ManuallyLog" component={ManualLogRunScreen} />
  </Navigator>
);

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const TopNavigator = () => <TabNavigator />;
