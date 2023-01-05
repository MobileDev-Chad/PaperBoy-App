import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import { COLORS, FONTS, SIZES,icons } from "../constants";

const DetailsScreen = ({ route, navigation }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flex: 2 }}>
        <Image
          source={{ uri: character.images.portrait_2 }}
          resizeMode="contain"
          style={{ width: "100%", height: "80%" }}
        />

        <View
          style={[
            styles.shadow,
            {
              position: "absolute",
              bottom: "5%",
              left: "5%",
              right: "5%",
              borderRadius: 15,
              padding: SIZES.padding,
              backgroundColor: COLORS.white,
            },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.shadow}>
              <Image
                source={{ uri: character.series.icon }}
                resizeMode="cover"
                style={{ width: 70, height: 70, borderRadius: 15 }}
              />
            </View>

            <View
              style={{
                marginHorizontal: SIZES.radius,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ ...FONTS.h3 }}>{character.name}</Text>
              <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                {character.series.name}
              </Text>

              <Text style={{ color: COLORS.darkgreen, ...FONTS.body3 }}>
                ${character.series.price}
              </Text>
            </View>

            <View></View>
          </View>
        </View>

        {/* Header Buttons */}
        <View
          style={{
            position: "absolute",
            top: 40,
            left: 25,
            right: 25,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems:'flex-end' }}>
            <TouchableOpacity onPress={console.log("Menu")}>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
        </View>

      </View>

      {/* Body */}
      <View style={{ flex: 1.5 }}></View>

      {/* Footer */}
      <View style={{ flex: 0.5 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default DetailsScreen;
