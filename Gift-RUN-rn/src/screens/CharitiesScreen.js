import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";
import { LogRunModal } from "../components/LogRunModal";

const CharitiesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Charities" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      ></Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default CharitiesScreen;
