import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, Button } from "@ui-kitten/components";
import ProgressCircle from "react-native-progress-circle"; // CREDIT: https://github.com/MrToph/react-native-progress-circle.git

const ProgressMeter = ({ milesCompleted, showButton, imageSrc }) => {
  return (
    <View style={styles.containter}>
      <ProgressCircle
        percent={milesCompleted}
        radius={90}
        borderWidth={20}
        color="#3399FF"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text category="h6" style={styles.text}>
          {milesCompleted}
        </Text>
        <Text category="c1" style={{}}>
          Completed
        </Text>
        <Image source={imageSrc} style={styles.image} />
      </ProgressCircle>
      <Button
        style={styles.button}
        size="small"
        status="success"
        disabled={showButton}
      >
        Donate Miles
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    height: 20,
  },
  image: {
    height: 55,
    width: 110,
  },
  text: {
    //marginTop: 0,
  },
});

export default ProgressMeter;

/*
  <Text style={{ fontSize: 18 }}>{"30%"}</Text>
  */
