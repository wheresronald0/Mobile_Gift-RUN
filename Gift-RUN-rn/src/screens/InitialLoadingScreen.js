import React, { useEffect, useContext } from "react";
import { View } from "react-native";

import UserAuthContext from "../context/UserAuthContext";

const InitialLoadingScreen = () => {
  const { tryLocalSignin } = useContext(UserAuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return <View></View>;
};

export default InitialLoadingScreen;
