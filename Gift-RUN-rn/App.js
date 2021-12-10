import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { UserAuthNavigator } from "./src/navigation/userAuthNavigation";
import { BottomBarNavigator } from "./src/navigation/bottomTabNavigation";
import { RunDataProvider } from "./src/context/RunDataContext";
import { AuthProvider } from "./src/context/UserAuthContext";
import { navigationRef } from "./src/navigation/RootNavigation";
import InitialLoadingScreen from "./src/screens/InitialLoadingScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default () => (
  <>
    <AuthProvider>
      <RunDataProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer ref={navigationRef}>
            <Navigator>
              <Screen
                name="LocalTokenAuthCheck"
                options={{ headerShown: false }}
                component={InitialLoadingScreen}
              />
              <Screen
                name="AuthFlow"
                options={{ headerShown: false }}
                component={UserAuthNavigator}
              />
              <Screen
                name="MainFlow"
                options={{ headerShown: false }}
                component={BottomBarNavigator}
              />
            </Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </RunDataProvider>
    </AuthProvider>
  </>
);
