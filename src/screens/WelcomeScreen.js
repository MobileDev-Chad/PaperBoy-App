import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, images, SIZES, FONTS } from "../constants";
import Screen from "../components/Screen";
import useAuth from '../auth/useAuth';

const WelcomeScreen = () => {
  const auth = useAuth();

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

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ alignItems: "center", marginHorizontal: SIZES.padding }}>
          <Text style={{ ...FONTS.h2 }}>PosterBoy</Text>
          <Text
            style={{
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: "center",
              ...FONTS.body3,
            }}
          >
            Get your favorite Smash Bros. characters delivered right to your
            doorstep!
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.shadow,{
            marginTop: SIZES.padding * 2,
            width: "70%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }]}
          onPress={() => auth.logIn("Guest")}
        >
          <LinearGradient
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
            }}
            colors={["#46aeff", "#5884ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Shop!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create ({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})

export default WelcomeScreen;
