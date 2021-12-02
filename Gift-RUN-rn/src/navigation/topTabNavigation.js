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

import LogRunScreen from "../screens/LogRunScreen";
import AutoLogRunScreen from "../screens/AutoLogRunScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const { Navigator, Screen } = createMaterialTopTabNavigator();

//UI Kitten Styling
const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <Tab title="Manually Log" style={styles.tabContainer} />
    <Tab title="Automatically Log" style={styles.tabContainer} />
  </TabBar>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <TopTabBar {...props} />}>
    <Screen name="ManLog" component={AutoLogRunScreen} />
    <Screen name="AutoLog" component={LogRunScreen} />
  </Navigator>
);

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: 40,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const TopNavigator = () => <TabNavigator />;
