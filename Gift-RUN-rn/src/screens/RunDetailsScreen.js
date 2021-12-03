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
        title="Run Details"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <RunCard />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
  },
});

export default RunDetailsScreen;
