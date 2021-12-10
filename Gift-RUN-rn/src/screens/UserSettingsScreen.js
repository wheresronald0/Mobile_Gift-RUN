import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";

import DistanceCalc from "../components/distanceCalc";
import UserAuthContext from "../context/UserAuthContext";

const UserSettingScreen = () => {
  const { signOut } = useContext(UserAuthContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="User Settings" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button onPress={signOut}>Log Out</Button>
        <DistanceCalc />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default UserSettingScreen;
