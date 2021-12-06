import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Card, Layout, Text } from "@ui-kitten/components";

const Header = (props) => (
  <View {...props}>
    <Text category="h6">American Cancer Society</Text>
  </View>
);

const Footer = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Text>
      Dedicated to helping people who face cancer. Learn about cancer research,
      patient services, early detection, treatment and education at cancer.org.
    </Text>
  </View>
);

const ACScard = ({ navigation }) => (
  <React.Fragment>
    <Card style={styles.card} header={Header} footer={Footer}>
      <Image source={require("../../assets/ACS.png")} style={styles.image} />
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

export default ACScard;
