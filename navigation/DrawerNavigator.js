import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import ContactScreen from "../screens/Contact";
import AboutStack from "./AboutStack";
import BottomTabNavigator from "./TabNavigator";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      headerTransparent:false
    }}>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="About" component={AboutStack} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;