import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { BottomBarNavigator } from "./src/navigation/bottomTabNavigation";

import { RunDataProvider } from "./src/context/RunDataContext";

export default () => (
  <>
    <RunDataProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <BottomBarNavigator />
      </ApplicationProvider>
    </RunDataProvider>
  </>
);
