import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "../screens/ScreenA";
import ScreenB from "../screens/ScreenB";
import AboutScreen from "../screens/About";
import HomeScreen from '../screens/Home';
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ScreenA" component={ScreenA} />
            <Stack.Screen name="ScreenB" component={ScreenB} />
        </Stack.Navigator>
    );
}

export default HomeStack;