import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import RunCard from "../components/RunCard";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const RunDetailsScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">Run Details</Text>
        <RunCard />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RunDetailsScreen;
