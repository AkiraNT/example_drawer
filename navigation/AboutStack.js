import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "../screens/ScreenA";
import ScreenB from "../screens/ScreenB";
import AboutScreen from "../screens/About";
import HomeScreen from '../screens/Home';
import DrawerNavigator from "./DrawerNavigator";
import BottomTabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const AboutStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="ScreenA" component={ScreenA} />
            <Stack.Screen name="ScreenB" component={ScreenB} />
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default AboutStack;