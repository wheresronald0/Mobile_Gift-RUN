import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Card, Layout, Text } from "@ui-kitten/components";

const Header = (props) => (
  <View {...props}>
    <Text category="h6">Save the Children</Text>
  </View>
);

const Footer = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Text>
      In the U.S. and around the world, we give children a healthy start in
      life, the opportunity to learn and protection from harm. We do whatever it
      takes to save children, transforming their lives and the future we share.
    </Text>
  </View>
);

const STCcard = ({ navigation }) => (
  <React.Fragment>
    <Card style={styles.card} header={Header} footer={Footer}>
      <Image source={require("../../assets/STC.jpg")} style={styles.image} />
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
    height: 130,
    width: 300,
  },
});

export default STCcard;
