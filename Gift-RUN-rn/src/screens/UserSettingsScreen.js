import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";

import DistanceCalc from "../components/distanceCalc";

const UserSettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="User Settings" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <DistanceCalc />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default UserSettingScreen;
