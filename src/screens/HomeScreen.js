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
import Screen from "../components/Screen";
import CharacterList from "../data/CharacterList";
import FranchiseList from "../data/FranchiseList";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, images, SIZES } from "../constants";

const OptionItem = ({ icon, bgColor, franchise, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: SIZES.base * 2,
        marginBottom: SIZES.base,
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
            source={icon}
            resizeMode="cover"
            style={{ tintColor: COLORS.white, width: 30, height: 30 }}
          />
        </LinearGradient>
      </View>
      <Text
        style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body4 }}
      >
        {franchise}
      </Text>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const [franchise, setFranchise] = useState("");

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
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <FlatList
            contentContainerStyle={{
              alignSelf: "flex-start",
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.base,
            }}
            numColumns={Math.ceil(FranchiseList.length / 2)}
            data={FranchiseList}
            keyExtractor={(franchise) => franchise.id.toString()}
            renderItem={({ item }) => (
              <OptionItem
                icon={item.icon}
                bgColor={[item.background_one, item.background_two]}
                franchise={item.franchise}
                onPress={() => setFranchise(`${franchise}`)}
              />
            )}
          />
        </ScrollView>
      </View>
      {/* Characters */}
      <View style={{ flex: 1 }}>
        {CharacterList.filter((characters) => {
          if (franchise === "") {
            return CharacterList;
          } else if (franchise === "All") {
            return CharacterList;
          } else if (franchise === characters.franchise) {
            return characters;
          }
        }).map(({ id, portrait, name, price }) => {
          return <></>;
        })}
      </View>
    </Screen>
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
