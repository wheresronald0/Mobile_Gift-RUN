import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "@ui-kitten/components";

import Map from "./Map";

const Header = (props) => {
  return (
    <View {...props}>
      <Text category="h6">Name of Your Run: </Text>
    </View>
  );
};

const Footer = (props) => {
  return (
    <View {...props}>
      <Text category="h6">Run Details:</Text>
      <Text category="s1">Date of Your Run</Text>
      <Text category="s1">Total Miles You Ran</Text>
      <Text category="s1">Total Run Time</Text>
      <Text category="s1">Charity </Text>
    </View>
  );
};

const RunCard = () => {
  return (
    <React.Fragment>
      <Card style={styles.card} header={Header} footer={Footer}>
        <Map />
      </Card>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
});

export default RunCard;
