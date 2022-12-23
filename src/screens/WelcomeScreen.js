import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, images } from "../constants";
import Screen from "../components/Screen";

const WelcomeScreen = () => {
  // Render

  return (
    <Screen>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={images.invincible}
          resizeMode="contain"
          style={{ width: "75%", height: "75%" }}
        />
      </View>

      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      ></View>
    </Screen>
  );
};

export default WelcomeScreen;
