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

import Map from "../components/Map";

const RunDetailsScreen = ({}) => {
  return (
    <SafeAreaView style={{}}>
      <Layout
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text category="h3" style={styles.title}>
          Track Your Run
        </Text>
        <Map />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RunDetailsScreen;
