import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { LinearGradient } from "expo-linear-gradient";
import { images, SIZES } from "../constants";

const HomeScreen = () => {
  return (
    <Screen>
      {/* Banner */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Image
          source={images.hero}
          resizeMode="cover"
          style={{ width: "100%", height: "100%", borderRadius: 15 }}
        />
      </View>
      {/* Franchise */}
      <View style={{ flex: 1 }}></View>
      {/* Characters */}
      <View style={{ flex: 1 }}></View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  shadwo: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeScreen;
