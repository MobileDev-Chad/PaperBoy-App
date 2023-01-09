import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, DetailsScreen } from "../screens";
import { COLORS, SIZES, icons } from "../constants";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator presentaion="modal">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: null,
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerLeft: ({ onPress }) => (
          <TouchableOpacity
            style={{ marginLeft: SIZES.padding }}
            onPress={onPress}
          >
            <Image
              source={icons.back}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: SIZES.padding }}
            onPress={() => console.log("Menu")}
          >
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        ),
      }}
    />

    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
