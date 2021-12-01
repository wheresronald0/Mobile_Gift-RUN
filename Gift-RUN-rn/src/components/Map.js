import React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
    width: 300,
  },
});

export default Map;
