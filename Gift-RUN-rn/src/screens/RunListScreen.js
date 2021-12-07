import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Divider, Layout, TopNavigation } from "@ui-kitten/components";

import ListCard from "../components/ListTile";

const RunListScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Your Gift-RUN's" alignment="center" />
      <Divider />
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RunDetails");
          }}
          style={styles.card}
        >
          <ListCard />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RunDetails");
          }}
          style={styles.card}
        >
          <ListCard />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RunDetails");
          }}
          style={styles.card}
        >
          <ListCard />
        </TouchableOpacity>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: 350,
  },
});

export default RunListScreen;
