import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import SettingScreen from "../screens/Setting";
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={
      {
       headerShown: false 
      }
   }>
      <Tab.Screen name="Home" component={HomeStack} options={{headerShown:false}} />
      <Tab.Screen name="Setting" component={SettingScreen}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;