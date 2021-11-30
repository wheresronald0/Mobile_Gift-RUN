import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const IndexScreen = () => {
  return (
    <View>
      <Text style={styles.title}>IndexSceen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});
export default IndexScreen;
