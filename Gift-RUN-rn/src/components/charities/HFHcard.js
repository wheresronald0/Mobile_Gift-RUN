import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Card, Layout, Text } from "@ui-kitten/components";

const Header = (props) => (
  <View {...props}>
    <Text category="h6">Habitat for Humanity</Text>
  </View>
);

const Footer = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Text>
      Habitat for Humanity is a nonprofit organization that helps people in your
      community and around the world build or improve a place they can call
      home.
    </Text>
  </View>
);

const HFHcard = ({ navigation }) => (
  <React.Fragment>
    <Card style={styles.card} header={Header} footer={Footer}>
      <Image source={require("../../assets/HH.png")} style={styles.image} />
    </Card>
  </React.Fragment>
);

const styles = StyleSheet.create({
  card: {
    marginRight: 15,
    width: 310,
    alignItems: "center",
    height: 350,
  },
  image: {
    height: 140,
    width: 300,
  },
});

export default HFHcard;
