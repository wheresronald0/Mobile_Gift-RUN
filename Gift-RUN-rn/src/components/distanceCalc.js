import React from "react";
import { Text } from "react-native";

const DistanceCalc = () => {
  const calculateDistance = () => {
    const toRadian = (n) => (n * Math.PI) / 180;

    let lat2 = 27.475142222408756;
    let lon2 = -82.48589769498355;
    let lat1 = 27.502590213877884;
    let lon1 = -82.49552294035637;

    console.log(lat1, lon1 + "===" + lat2, lon2);
    let R = 12543; // km
    let x1 = lat2 - lat1;
    let dLat = toRadian(x1);
    let x2 = lon2 - lon1;
    let dLon = toRadian(x2);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadian(lat1)) *
        Math.cos(toRadian(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    let total = d * 0.62137;
    console.log("distance==?", total);
    return total;
  };

  const total = calculateDistance();

  return <Text>{total}</Text>;
};

export default DistanceCalc;
