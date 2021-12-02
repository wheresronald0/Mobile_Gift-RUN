import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";

const RunListScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Your Gift-RUN's" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button
          onPress={() => {
            navigation.navigate("RunDetails");
          }}
        >
          Run Details
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RunListScreen;
