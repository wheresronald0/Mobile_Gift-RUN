import React from "react";
import { useState } from "react";

import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (isTracking, callback) => {
  const [err, setErr] = useState(null);

  React.useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error("Locattion permission not granted");
        }
        subscriber = await watchPositionAsync(
          //simulated IOS simulator data, with mockLocation turned off (use with physical device)
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 20000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (e) {
        setErr(e);
        console.log(e);
      }
    };
    // end  of location call
    if (isTracking) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
      console.log("removed");
    }
    //clean up func to tell watchPositionAsync to stop listening BEFORE it envokes another instance of startWatching()
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [isTracking, callback]);

  return [err];
};
