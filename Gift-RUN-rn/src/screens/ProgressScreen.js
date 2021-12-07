import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, FlatList } from "react-native";
import {
  Text,
  Button,
  Divider,
  Layout,
  TopNavigation,
} from "@ui-kitten/components";
import ProgressMeter from "../components/ProgressMeter";

const BadgesScreen = ({}) => {
  //const [value, setValue] = useState("");
  const data = [
    {
      id: 1,
      imageSrc: require("../../src/assets/ACS.png"),
      milesCompleted: 50,
      showButton: true,
    },
    {
      id: 2,
      imageSrc: require("../../src/assets/HH.png"),
      milesCompleted: 20,
      showButton: true,
    },
    {
      id: 3,
      imageSrc: require("../../src/assets/spca.png"),
      milesCompleted: 100,
      showButton: false,
    },
    {
      id: 4,
      imageSrc: require("../../src/assets/STC.jpg"),
      milesCompleted: 60,
      showButton: true,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text category="h6" style={{ marginTop: 15, alignSelf: "center" }}>
        Earn a $10 Donation for Every 100 Miles
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item }) => {
          return (
            <ProgressMeter
              milesCompleted={item.milesCompleted}
              imageSrc={item.imageSrc}
              showButton={item.showButton}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containter: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default BadgesScreen;

/*
  <Text style={{ fontSize: 18 }}>{"30%"}</Text>
  */
