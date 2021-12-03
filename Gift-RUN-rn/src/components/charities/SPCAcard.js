import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Card, Layout, Text } from "@ui-kitten/components";

const Header = (props) => (
  <View {...props}>
    <Text category="h6">SPCA</Text>
  </View>
);

const Footer = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Text>
      SPCA International works to stop the abuse and suffering of animals with
      innovative programs that serve both animals and their human caretakers.
    </Text>
  </View>
);

const SPCAcard = ({ navigation }) => (
  <React.Fragment>
    <Card style={styles.card} header={Header} footer={Footer}>
      <Image source={require("../../assets/spca.png")} style={styles.image} />
    </Card>
  </React.Fragment>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: 310,
    alignItems: "center",
    height: 360,
  },
  image: {
    height: 150,
    width: 300,
  },
});

export default SPCAcard;
