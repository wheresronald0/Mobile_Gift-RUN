import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";
import { LogRunModal } from "../components/LogRunModal";

const BadgesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Accomplishments" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      ></Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default BadgesScreen;
