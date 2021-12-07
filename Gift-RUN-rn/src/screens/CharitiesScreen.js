import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Divider, Layout, TopNavigation, Text } from "@ui-kitten/components";

import SPCAcard from "../components/charities/SPCAcard";
import ACScard from "../components/charities/ACSard";
import STCcard from "../components/charities/STCcard";
import HFHcard from "../components/charities/HFHcard";

const CharitiesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Charities"
        justifyContent="flex-end"
        alignment="center"
      />
      <Divider />
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <Text category="h3" style={styles.title}>
          Gift-RUN - where your miles go a long way!
        </Text>
        <Text style={styles.text}>
          Gift-RUN is a non-profit organization committed to making an impact
          through our members and the miles they run. Members can donate miles
          logged in exchange for monetary contribution to a participating
          charity of their choice. Each hard fought mile can be converted to a
          one dollar contribution to the following charities:
        </Text>
        <View>
          <ScrollView horizontal>
            <SPCAcard
              onPress={() => {
                navigation.navigate("RunDetails");
              }}
            />
            <ACScard onPress={() => {}} style={styles.card} />
            <STCcard onPress={() => {}} style={styles.card} />
            <HFHcard onPress={() => {}} style={styles.card} />
          </ScrollView>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    width: "90%",
    marginVertical: 20,
  },
  text: {
    width: "90%",
    marginBottom: 40,
  },
});

export default CharitiesScreen;
