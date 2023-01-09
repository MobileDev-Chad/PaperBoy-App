import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import CharacterList from "../data/CharacterList";
import FranchiseList from "../data/FranchiseList";
import routes from "../navigation/routes";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, images, SIZES } from "../constants";

const OptionItem = ({ icon, bgColor, franchise, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: SIZES.base * 1.43,
      }}
      onPress={onPress}
    >
      <View style={[styles.shadow, { width: 60, height: 60 }]}>
        <LinearGradient
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
          colors={bgColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image
            source={{ uri: icon }}
            resizeMode="cover"
            style={{ tintColor: COLORS.white, width: 40, height: 40 }}
          />
        </LinearGradient>
      </View>
      <Text
        style={{
          marginTop: SIZES.base / 2,
          color: COLORS.gray,
          ...FONTS.body4,
        }}
      >
        {franchise}
      </Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const [franchise, setFranchise] = useState("");

  return (
    <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
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
          resizeMode="contain"
          style={{ width: "100%", height: "100%", borderRadius: 15 }}
        />
      </View>

      {/* Franchise */}

      <View style={{  paddingHorizontal: SIZES.padding }}>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <FlatList
            contentContainerStyle={{
              marginTop: SIZES.base * 1.5,
            }}
            numColumns={Math.ceil(FranchiseList.length / 2)}
            data={FranchiseList}
            keyExtractor={(franchise) => franchise.id.toString()}
            renderItem={({ item }) => (
              <OptionItem
                icon={item.icon}
                bgColor={["#232526", "#414345"]}
                franchise={item.franchise}
                onPress={() => setFranchise(`${item.franchise}`)}
              />
            )}
          />
        </ScrollView>
      </View>
      {/* Characters */}

      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}
        >
          Characters
        </Text>

        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.base,
            paddingBottom: SIZES.radius,
          }}
        >
          {CharacterList.filter((characters) => {
            if (franchise === "") {
              return CharacterList;
            } else if (franchise === characters.series.name) {
              return characters;
            }
          }).map((item, index) => {
            return (
              <View>
                <TouchableOpacity
                  key={item.id}
                  style={{
                    justifyContent: "center",
                    marginHorizontal: SIZES.base,
                  }}
                  onPress={() => {
                    navigation.push(routes.CHARACTER_DETAILS, {character:item});
                  }}
                >
                  <Image
                    source={{ uri: item.images.portrait }}
                    resizeMode="stretch"
                    style={{
                      width: SIZES.width * 0.28,
                      height: "82%",
                      borderRadius: 15,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: SIZES.base / 2,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
                    <Text style={{ color: COLORS.darkgreen }}>
                      ${item.series.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
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
