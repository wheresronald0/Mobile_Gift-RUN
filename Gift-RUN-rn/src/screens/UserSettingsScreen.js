import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const UserSettingsScreen = () => {
  return (
    <View>
      <Text style={styles.title}>UserSettingsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});
export default UserSettingsScreen;
