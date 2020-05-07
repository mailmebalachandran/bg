import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./src/components/Dashboard";
import StateWiseDetails from "./src/components/StateWiseDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const [isLoadingunWantedMenu, setIsLoadngUnwantedMenu] = useState(false);
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      {isLoadingunWantedMenu ? (
      <Drawer.Navigator initialRouteName="State">
        <Drawer.Screen name="State" component={Dashboard} />
        <Drawer.Screen name="District" component={StateWiseDetails} />
      </Drawer.Navigator> )
      : (<Drawer.Navigator initialRouteName="State">
        <Drawer.Screen name="State" component={Dashboard} />
        <Drawer.Screen name="District" component={StateWiseDetails} />
      </Drawer.Navigator>)}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
