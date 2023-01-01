import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, DetailsScreen } from "../screens";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator presentaion="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />

    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
